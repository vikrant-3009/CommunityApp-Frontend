import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddReviewComponent } from './add-review/add-review.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductReviewsComponent,
    AddProductComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
