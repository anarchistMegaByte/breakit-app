import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { OrderDetails } from 'src/app/models/order-details';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  orderDetails: OrderDetails;
  deliverySlots: string[];
  
  constructor(private coreService: CoreService) {

    this.coreService.getDeliverySlots().subscribe(deliverySlots => {
      this.deliverySlots = deliverySlots;
    });
   }

  ngOnInit(): void {
    this.orderDetails = {
      address: "",
      delivery_slot: this.deliverySlots[0],
      menu_items: [],
      name: "",
      order_cost: 0,
      phone_number: "919320002501"
    }
  }

  onSubmit(): void {

    this.coreService.confirmOrderDetails(this.orderDetails).subscribe(data => {
      console.log(data)
      // this.router.navigate(['order-confirmation']);
    });
  }
  

}
