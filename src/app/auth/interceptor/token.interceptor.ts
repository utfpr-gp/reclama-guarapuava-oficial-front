import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataService} from '../service/data.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(private dataService: DataService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneReq: HttpRequest<any>;
    let headers;
    const token = this.dataService.getToken();
    headers = req.headers.set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    cloneReq = req.clone({headers});

    return next.handle(cloneReq);
  }

}
