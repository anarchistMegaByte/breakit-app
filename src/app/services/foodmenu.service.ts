import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuService {
  base_url: string = "https://654b0087f920.ngrok.io";
  
  constructor(private httpClient: HttpClient) { }
  
  getMenuForTheDay() {
    return this.httpClient.get(this.base_url + "/foodmenu/v1/get_todays_menu/").pipe(
      map(response => {
        return response['data'] as MenuItem[]; 
      })
    );
  }
}
