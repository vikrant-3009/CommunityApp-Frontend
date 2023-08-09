import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:5000";
  private adminApiUrl = this.baseUrl + "/api/admin";
  private userApiUrl = this.baseUrl + "/api/users";

  constructor(private http: HttpClient) { }

  // Admin Calls
  getAdmin(email: String): Observable<any> {
    return this.http.get(this.adminApiUrl + "/" + email);
  }


  // User Calls
  getUser(email: string): Observable<any> {
    return this.http.get(this.userApiUrl + "/" + email);
  }

  getUsersCount(): Observable<any> {
    return this.http.get(this.userApiUrl + "/count");
  }

  addNewUser(user: User): Observable<any> {
    return this.http.post<User>(this.userApiUrl, user);
  }
}
