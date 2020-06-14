import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestOtpComponent } from './components/request-otp/request-otp.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component'
import { FormsModule }   from '@angular/forms';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { RouteInterceptor } from './interceptors/route-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestOtpComponent,
    VerifyOtpComponent,
    OrderDetailsComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RouteInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
