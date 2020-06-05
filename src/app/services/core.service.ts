import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from '../models/order-details';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  userPhoneNumber: string;
  
  constructor(private httpClient: HttpClient) { }

  requestOtp(phoneNumber: string) {
    return this.httpClient.post("https://c9b97c36677a.ngrok.io/core/v1/register_or_login_otp/", {'phone_number': phoneNumber}).pipe();
  }

  verifyOtp(phoneNumber: string, otp: string) {
    return this.httpClient.post("https://c9b97c36677a.ngrok.io/core/v1/verify_otp/",{'phone_number': phoneNumber, "otp": otp}).pipe();
  }

  getDeliverySlots() {
    return of(["7-8am", "8-9am", "9-10am"]);
  }
  confirmOrderDetails(orderDetails: OrderDetails) {
    return this.httpClient.post("https://c9b97c36677a.ngrok.io/core/v1/confirm_order_details/",orderDetails).pipe();
  }
}
