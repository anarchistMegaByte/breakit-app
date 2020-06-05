import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  pNumber: string;
  votp: string;

  constructor(private coreService: CoreService, private router: Router) {
    this.pNumber = coreService.userPhoneNumber;
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.coreService.verifyOtp(this.pNumber, this.votp).subscribe(data => {
      console.log(data)
      this.router.navigate(['order-confirmation']);
    });
  }

}
