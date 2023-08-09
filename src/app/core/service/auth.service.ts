import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  adminLogin(email: string): Observable<any> {
    return this.userService.getAdmin(email);
  }

  userLogin(email: string): Observable<any> {
    return this.userService.getUser(email);
  }
}
