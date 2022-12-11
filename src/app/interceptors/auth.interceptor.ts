import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static accessToken = '';
  refresh = false;

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.accessToken}`,
      },
    });

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && !this.refresh) {
          this.refresh = true;

          return this.http
            .post(
              this.baseApiUrl + '/refreshToken',
              {},
              { withCredentials: true }
            )
            .pipe(
              switchMap((res: any) => {
                AuthInterceptor.accessToken = res.token;

                return next.handle(
                  request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${AuthInterceptor.accessToken}`,
                    },
                  })
                );
              })
            );
        }
        this.refresh = false;
        return throwError(() => err);
      })
    );
  }
}

function switchMap(
  arg0: (res: any) => Observable<HttpEvent<any>>
): import('rxjs').OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}
