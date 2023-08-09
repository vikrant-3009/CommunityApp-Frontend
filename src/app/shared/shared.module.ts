import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
