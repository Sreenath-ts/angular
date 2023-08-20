import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class ModifyResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map((event:HttpEvent<any>)=> {
         if(event instanceof HttpResponse){
           const modifiedBody = event.body.record
           return event.clone({body:modifiedBody})
         }else{
          return event;
         }
    }))
  }
}
