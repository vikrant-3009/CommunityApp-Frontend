import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserGuard } from '../shared/guards/user.guard';
import { ProductsComponent } from './products/products.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  {
    path: "",
    canActivateChild: [UserGuard],
    
    children: [
      {
        path: "user/home",
        component: HomeComponent
      },
      {
        path: "user/addproduct",
        component: AddProductComponent
      },
      {
        path: "user/:search",
        component: ProductsComponent,
        children: [
          {
            path: ":code",
            children: [
              {
                path: "reviews",
                component: ProductReviewsComponent,
                children: [
                  {
                    path: "addreview/:code",
                    component: AddReviewComponent
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
