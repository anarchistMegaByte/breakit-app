import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoreService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class RouteInterceptor implements HttpInterceptor {
    
    constructor(private coreService: CoreService, private router: Router) {

    }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
        tap(
            event => {
                console.log(this.coreService.orderDetails); 
                if (!this.coreService.orderDetails) {
                    this.router.navigate(["home"]);
                }
            },
            error => {
                console.log(this.coreService.orderDetails); 
                if (!this.coreService.orderDetails) {
                    this.router.navigate(["home"]);
                }
            }
        )
    );
  }
}