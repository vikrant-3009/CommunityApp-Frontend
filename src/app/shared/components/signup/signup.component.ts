import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });
  passwordMatch!: string;
  errorMessage!: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  get email() {
    return this.registerForm.get('email');
  }

  get fname() {
    return this.registerForm.get('fname');
  }

  get lname() {
    return this.registerForm.get('lname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  onSubmit() {
    const email = this.registerForm.get('email')?.value;
    const fname = this.registerForm.get('fname')?.value;
    const lname = this.registerForm.get('lname')?.value;
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if(password !== confirmPassword) {
      this.passwordMatch = "Password not matching.";
    }
    else {
      const user = new User(email, fname, lname, password);
      this.registerForm.reset();
      this.userService.addNewUser(user).subscribe(user => {
        setTimeout(() => {
          this.router.navigateByUrl("/login");
        }, 3000);
      }, error => {
        this.errorMessage = 'User already exists.';
      });
    }
  }

}
