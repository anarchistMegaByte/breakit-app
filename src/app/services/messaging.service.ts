import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private angularFireMessaging: AngularFireMessaging) {
  }

  requestPermission() {
    return this.angularFireMessaging.requestToken.pipe();
  }

  receiveMessage() {
    return this.angularFireMessaging.messages.pipe();
  }
}