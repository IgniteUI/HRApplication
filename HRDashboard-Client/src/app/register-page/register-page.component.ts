import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HRDashboardService } from '../services/hrdashboard.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
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
    if (this.password !== this.confirmedPassword) {
      this.errorMessage = 'Passwords should match!'
    }
    else if (this.email && this.firstName && this.lastName && this.password) {
      this.hRAPIService.registerUser({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, confirmedPassword: this.confirmedPassword })
      .subscribe({
        next: (response) => {
          localStorage.setItem('hr_app_token', response['value']);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.errorMessage = error.error["errors"] ? Object.values(error.error["errors"])[0] as string : error.error;
        }
      });
    }
    
    else {
      this.errorMessage = "All fields are required!";
    }
  }
}
