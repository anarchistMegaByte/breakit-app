import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequestOtpComponent } from './components/request-otp/request-otp.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "request-otp", component: RequestOtpComponent
  },
  {
    path: "verify-otp", component: VerifyOtpComponent
  },
  {
    path: "order-details", component: OrderDetailsComponent
  },
  {
    path: "order-confirmation", component: OrderConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
