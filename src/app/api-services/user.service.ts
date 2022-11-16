import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../app/api-model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  //add Users
  addUser(addUserRequest: User): Observable<User> {
    return this.http.post<User>(
      this.baseApiUrl + '/api/User',
      addUserRequest
    );
  }

  //get by ID
  getUserByID(id: string): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + '/api/User/' + id);
  }
}
