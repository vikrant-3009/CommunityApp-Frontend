import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/core/service/data.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registeredUsersCount: number = 0;
  productsCount: number = 0;
  reviewsCount: number = 0;

  constructor(private router: Router, private userService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
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

  verify() {
    this.router.navigate(['admin', 'verifyreviews']);
  }

}
