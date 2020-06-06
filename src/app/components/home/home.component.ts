import { Component, OnInit } from '@angular/core';
import { FoodmenuService } from 'src/app/services/foodmenu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  menuItems: MenuItem[] = [];

  
  constructor(private userInfoService: UserinfoService ,private coreService: CoreService, private foodMenuService: FoodmenuService, private router: Router) { 
    this.coreService.orderDetails = {
      address: "",
      name: "",
      delivery_slot: "",
      menu_items: [],
      phone_number: "",
      delivery_date: "",
      order_id: 0
    }
    this.foodMenuService.getMenuForTheDay().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
  }

  ngOnInit(): void {
  }

  onPlus(menuItem) {
    let menuIndex = this.coreService.orderDetails.menu_items.findIndex(mi => mi.food_item_id === menuItem.food_item_id);
    if (menuIndex < 0) {
      menuItem.quantity = 1;
      this.coreService.orderDetails.menu_items.push(menuItem)
    } else {
      this.coreService.orderDetails.menu_items[menuIndex].quantity += 1;
    }
    console.log(menuItem.quantity);
  }

  onMinus(menuItem) {
    let menuIndex = this.coreService.orderDetails.menu_items.findIndex(mi => mi.food_item_id === menuItem.food_item_id);
    let menuIsFound = this.coreService.orderDetails.menu_items.find(mi => mi.food_item_id === menuItem.food_item_id);
    if (menuIsFound !== undefined) {
      if (menuIsFound.quantity == 1) {
        this.coreService.orderDetails.menu_items.splice(menuIndex, 1);
      } else {
        this.coreService.orderDetails.menu_items[menuIndex].quantity -= 1;
      }
    }
    console.log(this.coreService.orderDetails.menu_items);
  }

  onOrderNow() {
    this.coreService.orderDetails.menu_items = this.menuItems.filter(menuItem => menuItem.quantity > 0);
    console.log(this.coreService.orderDetails);
    console.log(this.userInfoService.isLoggedIn());
    if(this.userInfoService.isLoggedIn()) {
      let userInfo = this.userInfoService.getUser();
      this.coreService.orderDetails.phone_number = userInfo.phone_number;
      this.coreService.orderDetails.delivery_slot = userInfo.delivery_slot;
      this.router.navigate(['order-confirmation']);
    } else {
      this.router.navigate(['request-otp']);
    }
  }

  getTotalCost() {
    return this.coreService.getTotalCost();
  }

  getTotalItems() {
    return this.coreService.getTotalItems();
  }

  getItemQuantity(foodItemId: number) {
    return this.coreService.getFoodItemQuantity(foodItemId);
  }

  getTimeValidation() {
    let dateTime = new Date()
    if (dateTime.getHours() >=20 && dateTime.getHours() <=21 ) {
      return true;
    } else {
      return true;
    }
  }

  getMenuDate() {
    let dateTime = new Date();
    if (dateTime.getHours() > 21 && dateTime.getHours() <= 23) {
      dateTime.setDate(dateTime.getDate() + 12);
    } else {
      dateTime.setDate(dateTime.getDate() + 1);
    }
    return dateTime.getDate().toString() + " " + dateTime.toLocaleString('default', {month: 'long'}) + " " + dateTime.getFullYear().toString();
  }

  getDeliverySlot() {
    return this.userInfoService.getDeliverySlot();
  }

}
