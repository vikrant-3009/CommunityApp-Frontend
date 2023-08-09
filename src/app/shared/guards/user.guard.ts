import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePersistenceService } from 'src/app/core/service/route-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {

  constructor(private routePersistenceService: RoutePersistenceService) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.routePersistenceService.getUserLoggedIn() === "true") {
        return true;
      }
      return false;
  }
  
}
