import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { OrderDetails } from 'src/app/models/order-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  deliverySlots: string[];
  
  constructor(private coreService: CoreService, private router: Router) {

    this.coreService.getDeliverySlots().subscribe(deliverySlots => {
      this.deliverySlots = deliverySlots;
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.coreService.orderDetails);
    this.coreService.confirmOrderDetails(this.coreService.orderDetails).subscribe(data => {
      console.log(data)
      this.router.navigate(['order-details']);
    });
  }

  getOrderDetails(){
    return this.coreService.orderDetails;
  }
  

}
