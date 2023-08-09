import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/core/models/Product';
import { Review } from 'src/app/core/models/Review';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  productDataFetched: Boolean = false;
  reviews: Array<Review> = [];
  productCode!: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.productForm.addControl('productCode', new FormControl(''));
    this.productForm.addControl('brand', new FormControl(''));
    this.productForm.addControl('name', new FormControl(''));
    
    this.route.params.subscribe(params => {
      const productCode = params['code'];
      this.productCode = productCode;

      this.dataService.getProductByCode(productCode).subscribe(product => {
        this.productForm.patchValue({
          productCode: product.productCode,
          brand: product.brand,
          name: product.productName
        });
        this.productDataFetched = true;

        this.dataService.getReviewsOfProduct(productCode).subscribe((res) => {
          this.reviews = res;
        });
      });
    });
  }

}
