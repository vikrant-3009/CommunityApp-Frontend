import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/core/models/Review';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Array<Review> = [];
  isLoading: boolean = true;
  showModal: boolean = false;
  reviewId!: string;
  status!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNonApprovedReviews().subscribe(reviews => {
      this.reviews = reviews;
      this.isLoading = false;
      // console.log(reviews);
    });
  }

  openModal(reviewId: string, status: string) {
    this.showModal = true;
    this.reviewId = reviewId;
    this.status = status;
  }

  handleConfirmation(confirmStatus: boolean) {
    // user accepted the modal prompt
    if(confirmStatus) {
      if(this.status === 'accept') {   // user clicked on accept review
        this.dataService.updateApprovedStatus(this.reviewId).subscribe(() => { });
      }
      else {    // user clicked on reject review
        this.dataService.deleteReview(this.reviewId).subscribe(() => { });
      }
    }
    this.showModal = false;
  }

}
