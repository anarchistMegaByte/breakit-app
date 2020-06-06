import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  
  constructor() {
   }

  setUser(userObj: UserInfo) {
    localStorage.setItem("user", JSON.stringify(userObj))
  }

  isLoggedIn() {
    let user = this.getUser();
    console.log(user);
    if (user && user.isLoggedIn) {
      console.log(user.isLoggedIn);
      return true;
    } else {
      return false;
    }

  }

  getUser() {
    return JSON.parse(localStorage.getItem("user")) as UserInfo;
  }

  setLogginIn(status: boolean) {
    let user = this.getUser();
    user.isLoggedIn = status;
    this.setUser(user);
  }

  getDeliverySlot() {
    let user = this.getUser();
    if (user) {
      return user.delivery_slot;
    } else {
      return undefined;
    }
  }

  setDeliverySlot(delivery_slot: string) {
    let user = this.getUser();
    user.delivery_slot = delivery_slot;
    this.setUser(user);
  }
}
