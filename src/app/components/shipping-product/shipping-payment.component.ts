import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../service/payment.service';

declare var Razorpay: any;

@Component({
  selector: 'app-shipping-payment',
  templateUrl: './shipping-payment.component.html',
  styleUrls: ['./shipping-payment.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ShippingPaymentComponent implements OnInit {
  shippingForm: FormGroup;
  isLoading = false;
  pincodeError = '';
  selectedPaymentMethod = '';
  totalAmount: number = 1000;

  productImage = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff';
  productName = 'Premium Sport Shoes';
  quantity = 1;
  unitPrice = 2999;
  shippingCharges = 99;
  tax = 540;
  
  get subtotal(): number {
    return this.quantity * this.unitPrice;
  }
  
  get total(): number {
    return this.subtotal + this.shippingCharges + this.tax;
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private paymentService: PaymentService,
  ) {
    this.shippingForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      street: ['', Validators.required],
      city: [''],
      state: [''],
      country: ['India'],
    });
  }

  ngOnInit(): void {}

  lookupPincode(): void {
    const pincode = this.shippingForm.get('pincode')?.value;
    if (pincode?.length === 6) {
      this.isLoading = true;
      this.http.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .pipe(
          tap((response: any) => {
            this.isLoading = false;
            if (response[0].Status === 'Success') {
              const postOffice = response[0].PostOffice[0];
              this.shippingForm.patchValue({
                city: postOffice.District,
                state: postOffice.State,
              });
              this.pincodeError = '';
            } else {
              this.pincodeError = 'Invalid pincode';
            }
          }),
          catchError(error => {
            this.isLoading = false;
            this.pincodeError = 'Error looking up pincode';
            return of(null);
          })
        ).subscribe();
    }
  }

  razorpayOptions: any;


  makePayment() {
    const options = {
      key: 'rzp_live_QOeEUz1FqauCz0',
      amount: 200, // ₹500 (amount in paise)
      currency: 'INR',
      name: 'Kaira',
      description: 'Product Purchase',
      image: '../../../../assets/images/Kaira_Logo-New.png',
      handler: (response: any) => {
        console.log('Payment Success:', response);
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: this.shippingForm.get('fullName')?.value,
        contact: this.shippingForm.get('phone')?.value,
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }

}