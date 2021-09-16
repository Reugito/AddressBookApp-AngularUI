import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('jwtToken')
    var authHeader = 'Bearer '+ token
    const authReq = req.clone({setHeaders: {Authorization: authHeader }})
    console.log(token,"hi iam intercepter", req);
    return next.handle(authReq );
  }

}
