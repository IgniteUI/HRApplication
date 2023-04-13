import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent {
  public listItemVisible = false;

  constructor(private authService: AuthService,
    private router: Router){

  }

  isUserAdmin() {
    return this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login-page');
  }
}