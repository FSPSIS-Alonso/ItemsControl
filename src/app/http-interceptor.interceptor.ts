import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorsService {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);
    const newReq = req.clone({
      headers: req.headers
        .set('content-type', 'application/json')
        .set('Accept', 'application/json'),
      withCredentials: true,
    });

    return next.handle(newReq);
  }
}
