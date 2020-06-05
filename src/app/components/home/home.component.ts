import { Component, OnInit } from '@angular/core';
import { FoodmenuService } from 'src/app/services/foodmenu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  menuItems: MenuItem[] = [];

  
  constructor(private coreService: CoreService, private foodMenuService: FoodmenuService, private router: Router) { 
    this.coreService.orderDetails = {
      address: "",
      name: "",
      delivery_slot: "",
      menu_items: [],
      phone_number: ""
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
    this.router.navigate(['request-otp']);
    console.log("Order Now Clicked !!");
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

}
