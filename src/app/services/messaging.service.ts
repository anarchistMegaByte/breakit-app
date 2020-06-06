import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private angularFireMessaging: AngularFireMessaging) {
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    return this.angularFireMessaging.messages.pipe();
  }
}