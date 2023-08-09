import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/core/service/auth.service';
import { RoutePersistenceService } from 'src/app/core/service/route-persistence.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  errorMessage!: String;

  constructor(private router: Router, private authService: AuthService, private routePersistenceService: RoutePersistenceService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.adminLogin(email).subscribe(admin => {
      if(admin.password === password) {
        this.routePersistenceService.storeAdminRoute("admin/home");
        this.router.navigateByUrl("/admin/home");
      }
      else {
        this.errorMessage = "Invalid Password.";
      }
    }, error => {
      this.authService.userLogin(email).subscribe(user => {
        if(user.password === password) {
          this.routePersistenceService.storeUserRoute("user/home");
          this.router.navigateByUrl("/user/home");
        }
        else {
          this.errorMessage = "Invalid Password.";
        }
      }, error => {
        this.errorMessage = "Invalid Credentials.";
      })
    });
  }

}