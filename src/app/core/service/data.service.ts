import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "http://localhost:5000";
  private productApiUrl = this.baseUrl + "/api/products";
  private reviewApiUrl = this.baseUrl + "/api/reviews";

  constructor(private http: HttpClient) { }


  // Product Calls
  getAllProducts(): Observable<any> {
    return this.http.get(this.productApiUrl);
  }

  getProductsCount(): Observable<any> {
    return this.http.get(this.productApiUrl + "/count");
  }

  getProductsBySearch(data: string): Observable<any> {
    return this.http.get(this.productApiUrl + "/" + data);
  }

  getProductsByFilter(productCode: string, brand: string, productName: string): Observable<any> {
    return this.http.get(this.productApiUrl + "/filter/" + productCode + "/" + brand + "/" + productName);
  }

  getProductByCode(code: string): Observable<any> {
    return this.http.get(this.productApiUrl + "/code/" + code);
  }

  addNewProduct(product: Product): Observable<any> {
    return this.http.post<Product>(this.productApiUrl, product);
  }


  // Review Calls
  getReviewsOfProduct(productCode: String): Observable<any> {
    return this.http.get(this.reviewApiUrl + "/" + productCode);
  }

  getApprovedReviewsCount(): Observable<any> {
    return this.http.get(this.reviewApiUrl + "/approvedCount");
  }

  getNonApprovedReviews(): Observable<any> {
    return this.http.get(this.reviewApiUrl + "/nonApproved");
  }

  addNewReview(review: Review): Observable<any> {
    return this.http.post<Review>(this.reviewApiUrl, review);
  }

  updateApprovedStatus(reviewId: string): Observable<any> {
    return this.http.patch(this.reviewApiUrl + "/" + reviewId, {});
  }

  deleteReview(reviewId: string): Observable<any> {
    return this.http.delete(this.reviewApiUrl + "/" + reviewId);
  }

}