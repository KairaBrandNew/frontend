import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private razorpayKey = 'fPB319Sl9pO3hPi2HcqWEgvo';
  private apiUrl = 'http://localhost:8080/api/clothing';

  constructor(private http: HttpClient) {}

  createOrder(amount: number) {
    return this.http.post<any>(`${this.apiUrl}/create-order`, { amount });
  }
}