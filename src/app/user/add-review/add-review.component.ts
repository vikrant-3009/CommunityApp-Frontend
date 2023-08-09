import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Review } from 'src/app/core/models/Review';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  reviewForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(30), Validators.maxLength(400)])
  });
  errorMessage!: string;
  productCode!: string;
  
  constructor(private dataService: DataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if(code != null) {
      this.productCode = code;
    }
  }

  get title() {
    return this.reviewForm.get("title");
  }

  get rating() {
    return this.reviewForm.get("rating");
  }

  get description() {
    return this.reviewForm.get("description");
  }

  randomId(): string {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    var id = '';
    for(var i = 0; i < 10; i++) {
      id += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return id;
  }

  onSubmit() {
    const title = this.reviewForm.get("title")?.value;
    const rating = this.reviewForm.get("rating")?.value;
    const description = this.reviewForm.get("description")?.value;
    const id = this.randomId();
    // console.log(id, rating, title, description, this.productCode);

    this.dataService.getProductByCode(this.productCode).subscribe(product => {
      const review = new Review(id, rating, title, description, false, product, this.productCode);

      this.dataService.addNewReview(review).subscribe(res => {
        this.location.back();
      }, error => {
        this.errorMessage = 'Review not submitted.';
      });
    });
  }

}
