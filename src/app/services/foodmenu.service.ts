import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuService {

  constructor(private httpClient: HttpClient) { }

  getMenuForTheDay() {
    return this.httpClient.get("https://c6eb238fcaa0.ngrok.io/foodmenu/v1/get_todays_menu/").pipe(
      map(response => {
        return response['data'] as MenuItem[]; 
      })
    );
  }
}
