import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable,of ,tap} from 'rxjs';
import { CacheResponseService } from '../services/cache-response.service';

@Injectable()
export class CachingResponseInterceptor implements HttpInterceptor {

  constructor(private cacheService:CacheResponseService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    if(request.method !== 'GET'){
      return next.handle(request);
    }
   
    const cacheKey = request.url;

    if(this.cacheService.storage.has(cacheKey)){
      console.log('caching')
      return of(this.cacheService.get(cacheKey))
    }
    
    return next.handle(request).pipe(tap((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse){
          this.cacheService.set(cacheKey,event)
        }
    }))

  }
}
