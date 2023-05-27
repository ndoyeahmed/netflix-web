import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { environment } from 'src/environments/environment';

const url = environment.url;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: url + request.url
      });
    }
    // Adding a token to the request (JWT Token)
    if (this.auth.token()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.token()}`
        }
      });
    }
    return next.handle(request);
  }
}
