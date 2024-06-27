import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

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

    return next
      .handle(newReq)
      .pipe(catchError((error) => this.manejarErrores(error)));
  }

  manejarErrores(error: HttpErrorResponse) {
    const status = error.status;

    //404
    //500

    if (status > 399 && status <= 499) {
      alert(error.message);
    }

    return throwError(() => error);
  }
}
