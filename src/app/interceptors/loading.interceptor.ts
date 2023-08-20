import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { ObservablesService } from '../services/observables.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private service : ObservablesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.service.showLoader()
    return next.handle(request).pipe(finalize(()=>{
      this.service.hideLoader()
    }));
  }
}
