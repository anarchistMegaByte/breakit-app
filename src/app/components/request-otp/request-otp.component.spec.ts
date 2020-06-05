import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOtpComponent } from './request-otp.component';

describe('RequestOtpComponent', () => {
  let component: RequestOtpComponent;
  let fixture: ComponentFixture<RequestOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
