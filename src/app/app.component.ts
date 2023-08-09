import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutePersistenceService } from './core/service/route-persistence.service';
import { DataService } from './core/service/data.service';
import { UserService } from './core/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExitTestAngular';
  isLoggedIn: boolean = false;
  registeredUsersCount: number = 0;
  productsCount: number = 0;
  reviewsCount: number = 0;

  constructor(private routePersistenceService: RoutePersistenceService, private router: Router, private dataService: DataService, private userService: UserService) { }

  ngOnInit(): void {
    if(this.routePersistenceService.getUserLoggedIn() === "true" || this.routePersistenceService.getAdminLoggedIn() === "true") {
      this.isLoggedIn = true;
    }

    this.userService.getUsersCount().subscribe((res) => {
      this.registeredUsersCount = res;
    });

    this.dataService.getProductsCount().subscribe((res) => {
      this.productsCount = res;
    });

    this.dataService.getApprovedReviewsCount().subscribe((res) => {
      this.reviewsCount = res;
    });
  }

  onLogoClick() {
    if(this.routePersistenceService.getUserLoggedIn() === "true") {
      const userRoute = this.routePersistenceService.getUserRoute();
      this.router.navigateByUrl(userRoute);
    }
    else if(this.routePersistenceService.getAdminLoggedIn() === "true") {
      const adminRoute = this.routePersistenceService.getAdminRoute();
      this.router.navigateByUrl(adminRoute);
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

  logout() {
    this.routePersistenceService.clearRoute();
    this.router.navigateByUrl("/");
  }
}
