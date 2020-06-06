import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { MessagingService } from 'src/app/services';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  pNumber: string;
  votp: string;

  constructor(private messagingService: MessagingService, private angularFireMessaging: AngularFireMessaging, private userInfoService: UserinfoService ,private coreService: CoreService, private router: Router) {
    this.pNumber = this.coreService.orderDetails.phone_number;
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) {
        this.angularFireMessaging.useServiceWorker(registration).then(() => {
          this.messagingService.requestPermission().subscribe(
            (token) => {
              console.log(token);
              this.coreService.registerToken(this.pNumber, token).subscribe();
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
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.coreService.verifyOtp(this.pNumber, this.votp).subscribe(data => {
      this.userInfoService.setUser({phone_number: this.pNumber, isLoggedIn: false, delivery_slot: ""});
      if (data["status"]) {
        this.userInfoService.setLogginIn(true);
      }
      
      console.log(this.coreService.orderDetails);
      this.router.navigate(['order-confirmation']);
    });
  }

}
