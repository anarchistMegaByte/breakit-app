import { Component, OnInit } from '@angular/core';
import { FoodmenuService } from 'src/app/services/foodmenu.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  menuItems: MenuItem[] = [];
  constructor(private foodMenuService: FoodmenuService) { 
    this.foodMenuService.getMenuForTheDay().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
  }

  ngOnInit(): void {
  }

}
