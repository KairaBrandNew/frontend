import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';

export interface CartItem {
  title: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number; 
}

@Component({
  selector: 'app-cart-side-panel',
  templateUrl: './cart-side-panel.component.html',
  styleUrls: ['./cart-side-panel.component.css'],
  imports: [NgxPayPalModule],
})
export class CartSidePanelComponent {
  @Input() isOpen = signal(false); // Signal to control visibility of the side panel
  @Input() cartItems = signal<CartItem[]>([]);
  public payPalConfig ? : IPayPalConfig;
  showSuccess!: boolean;
  showCancel!: boolean;
  showError!: boolean;
  public showPaypalButtons!: boolean;

  

    // Expose Math object
  Math = Math;

  
  get totalPrice() {
    return this.cartItems().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get discountedPrice() {
    return this.totalPrice * 0.15; // Example: 15% discount
  }

  toggleCart() {
    this.isOpen.update((open) => !open);
  }

  removeItem(index: number) {
    const updatedItems = this.cartItems().filter((_, i) => i !== index);
    this.cartItems.set(updatedItems);
  }

  checkOut(): void {
    debugger;
    this.initConfig();
  }

  initConfig(): void {
      debugger;
        this.payPalConfig = {
            currency: 'USD',
            clientId: 'AX88kHVSO_SeMY7Jfq4T6CdGZiGaQrlRlLnQnUb0FxvuCNreq1oV6p1pJOhDV__fqGSva2nooGQ0qtXb',
            createOrderOnClient: (data: any) =><ICreateOrderRequest>{
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: "9.99",
                    breakdown: {
                      item_total: {
                        currency_code: "USD",
                        value: "9.99"
                      }
                    }
                  },
                  items: [
                    {
                      name: "Enterprise Subscription",
                      quantity: "1",
                      category: "DIGITAL_GOODS",
                      unit_amount: {
                        currency_code: "USD",
                        value: "9.99"
                      }
                    }
                  ]
                }
              ]
            },
          advanced: {
            commit: "true"
          },
          style: {
            label: "paypal",
            layout: "vertical"
          },
          onApprove: (data, actions) => {
            console.log(
              "onApprove - transaction was approved, but not authorized",
              data,
              actions
            );
            actions.order.get().then((details: any) => {
              console.log(
                "onApprove - you can get full order details inside onApprove: ",
                details
              );
            });
          },
          onClientAuthorization: data => {
            console.log(
              "onClientAuthorization - you should probably inform your server about completed transaction at this point",
              data
            );
          },
          onCancel: (data, actions) => {
            console.log("OnCancel", data, actions);
          },
          onError: err => {
            console.log("OnError", err);
          },
          onClick: (data, actions) => {
            console.log("onClick", data, actions);
          }
    }
  }
  pay() {
    this.showPaypalButtons = true;
  }

  back(){
    this.showPaypalButtons = false;
  }
}
