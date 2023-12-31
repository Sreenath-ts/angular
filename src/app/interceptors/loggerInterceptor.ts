import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url,'request');
    return next.handle(request).pipe(tap((event:HttpEvent<any>) => {
         if(event instanceof HttpResponse){
          console.log(event.url,'response',event);
          
         }
    }))
  }
}
