import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  SERVER_URL: string = 'http://127.0.0.1:5000/detect';
  constructor(private httpClient: HttpClient) {}

  public upload(formData) {
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
