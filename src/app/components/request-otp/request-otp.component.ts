import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-otp',
  templateUrl: './request-otp.component.html',
  styleUrls: ['./request-otp.component.scss']
})
export class RequestOtpComponent implements OnInit {
  pNumber: string;

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.coreService.requestOtp(this.pNumber).subscribe(data => {
      console.log(data)
      this.coreService.userPhoneNumber = this.pNumber;
      this.router.navigate(['verify-otp']);
    });
  }
}
