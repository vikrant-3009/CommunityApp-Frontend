import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/core/service/data.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  registeredUsersCount: number = 0;
  productsCount: number = 0;
  reviewsCount: number = 0;
  constructor(private userService: UserService, private dataService: DataService, private router: Router) { }

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

  addProduct() {
    this.router.navigateByUrl("user/addproduct");
  }

  onSubmit() {
    const data = this.searchForm.get('search')?.value;
    this.router.navigate(['user/', data]);
  }

}
