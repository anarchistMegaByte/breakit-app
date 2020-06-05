import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
  }

  getOrderDetails() {
    return this.coreService.orderDetails;
  }

  getAmount() {
    return this.coreService.getTotalCost();
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
