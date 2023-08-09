import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutePersistenceService {
  private ADMIN_ROUTE_KEY = 'adminRoute';
  private adminLoggedIn = 'adminLoggedIn';

  private USER_ROUTE_KEY = 'userRoute';
  private userLoggedIn = 'userLoggedIn';

  constructor() { }

  storeAdminRoute(route: string): void {
    localStorage.setItem(this.adminLoggedIn, "true");
    localStorage.setItem(this.ADMIN_ROUTE_KEY, route);
  }

  getAdminLoggedIn(): string {
    return localStorage.getItem(this.adminLoggedIn) || "false";
  }

  getAdminRoute(): string {
    return localStorage.getItem(this.ADMIN_ROUTE_KEY) || '/';
  }

  clearRoute(): void {
    localStorage.clear();
  }

  storeUserRoute(route: string): void {
    localStorage.setItem(this.userLoggedIn, "true");
    localStorage.setItem(this.USER_ROUTE_KEY, route);
  }

  getUserLoggedIn(): string {
    return localStorage.getItem(this.userLoggedIn) || "false";
  }

  getUserRoute(): string {
    return localStorage.getItem(this.USER_ROUTE_KEY) || '/';
  }

}
