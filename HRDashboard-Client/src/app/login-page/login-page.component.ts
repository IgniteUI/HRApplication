import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HRDashboardService } from '../services/hrdashboard.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email: number;
  firstName: string;
  lastName: string;
  password: string;
  confirmedPassword: string;
  errorMessage: string;

  constructor(
    private hRAPIService: HRDashboardService,
    private router: Router
  ) { }

  onSubmit(event) {
    event.preventDefault();
    if (this.email && this.password) {
      this.hRAPIService.loginUser({ email: this.email, password: this.password })
        .subscribe({
          next: (response) => {
            localStorage.setItem('hr_app_token', response['value']);
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            console.log(error)
            this.errorMessage = error.error["errors"] ? Object.values(error.error["errors"])[0] as string : error.error;
          }
        });
    }
    else {
      this.errorMessage = "All fields are required!";
    }
  }
}
