import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService, CoreService } from 'src/app/services';


@Component({
  selector: 'app-request-otp',
  templateUrl: './request-otp.component.html',
  styleUrls: ['./request-otp.component.scss']
})
export class RequestOtpComponent implements OnInit {
  pNumber: string;

  constructor(private angularFireMessaging: AngularFireMessaging, private messagingService: MessagingService, private coreService: CoreService, private router: Router) {
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) {
        this.angularFireMessaging.useServiceWorker(registration).then(() => {
          this.messagingService.requestPermission();

          this.angularFireMessaging.messages.subscribe((payload) => {
            console.log(payload);
          });
        });
      }
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.coreService.requestOtp(this.pNumber).subscribe(data => {
      console.log(data)
      this.coreService.orderDetails.phone_number = this.pNumber;
      console.log(this.coreService.orderDetails);
      this.router.navigate(['verify-otp']);
    });
  }
}
