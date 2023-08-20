import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      
        
        let request = req.clone({setHeaders:{'Authorization':'123456789'}})

     
        
        return next.handle(request)
    }
}
