import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from '../models/order-details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  orderDetails: OrderDetails;
  base_url: string = "https://623b73f33852.ngrok.io";
  constructor(private httpClient: HttpClient) { 

  }

  requestOtp(phoneNumber: string) {
    return this.httpClient.post(this.base_url + "/core/v1/register_or_login_otp/", {'phone_number': phoneNumber}).pipe();
  }

  verifyOtp(phoneNumber: string, otp: string) {
    return this.httpClient.post(this.base_url + "/core/v1/verify_otp/",{'phone_number': phoneNumber, "otp": otp}).pipe();
  }

  getDeliverySlots() {
    return this.httpClient.get(this.base_url + "/core/v1/get_all_delivery_slots/").pipe(
      map(response => {
        return response['data'] as string[]; 
      })
    );
  }
  confirmOrderDetails(orderDetails: OrderDetails) {
    return this.httpClient.post(this.base_url + "/core/v1/confirm_order/",orderDetails).pipe();
  }

  getTotalCost(){
    let cost = 0;
    this.orderDetails.menu_items.map(menuitem => {
      cost = cost + menuitem.quantity * menuitem.price;
    })
    return cost;
  }

  getTotalItems(){
    let qty = 0;
    this.orderDetails.menu_items.map(menuitem => {
      qty += menuitem.quantity;
    })
    return qty;
  }

  getFoodItemQuantity(foodItemId: number) {
    let menuIsFound = this.orderDetails.menu_items.find(mi => mi.food_item_id === foodItemId);
    if (menuIsFound !== undefined) {
      return menuIsFound.quantity;
    }
    return 0;
  }

}
