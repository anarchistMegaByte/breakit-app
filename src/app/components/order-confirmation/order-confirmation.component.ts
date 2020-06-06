import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService } from 'src/app/services';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  deliverySlots: string[];
  
  constructor(private messagingService: MessagingService, private angularFireMessaging: AngularFireMessaging, private userInfoService: UserinfoService, private coreService: CoreService, private router: Router) {
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) {
        this.angularFireMessaging.useServiceWorker(registration).then(() => {
          this.messagingService.requestPermission().subscribe(
            (token) => {
              console.log(token);
              this.coreService.registerToken(this.coreService.orderDetails.phone_number, token).subscribe();
            },
            (err) => {
              console.error('Unable to get permission to notify.', err);
            }
          );

          this.angularFireMessaging.messages.subscribe((payload) => {
            console.log(payload);
          });
        });
      }
    });
    this.coreService.getDeliverySlots().subscribe(deliverySlots => {
      this.deliverySlots = deliverySlots;
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.coreService.orderDetails);
    this.coreService.confirmOrderDetails(this.coreService.orderDetails).subscribe(data => {
      if (data["status"]) {
          this.userInfoService.setDeliverySlot(this.coreService.orderDetails.delivery_slot);
      }
      this.coreService.orderDetails.order_id = data["data"]["order_id"];
      this.coreService.orderDetails.delivery_date = data["data"]["order_date"];
      console.log(data);
      this.router.navigate(['order-details']);
    });
  }

  getOrderDetails(){
    return this.coreService.orderDetails;
  }
  

}
