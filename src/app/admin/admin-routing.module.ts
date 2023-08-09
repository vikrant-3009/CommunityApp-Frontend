import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: "",
    canActivateChild: [AdminGuard],

    children: [
      {
        path: "admin/home",
        component: HomeComponent
      },
      {
        path: "admin/verifyreviews",
        component: ReviewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
