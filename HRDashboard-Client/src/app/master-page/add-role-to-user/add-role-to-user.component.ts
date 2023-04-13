import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HRDashboardService } from 'src/app/services/hrdashboard.service';

@Component({
  selector: 'app-add-role-to-user',
  templateUrl: './add-role-to-user.component.html',
  styleUrls: ['./add-role-to-user.component.scss']
})
export class AddRoleToUserComponent {
  users: any;
  email: string;
  role: string;

  constructor(private hrApiService: HRDashboardService,
    private router: Router) { }

  ngOnInit() {
    this.hrApiService.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(data)
      });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.email && this.role) {
      this.hrApiService.changeUserRole({ email: this.email, role: this.role})
        .subscribe({
          next: (response) => {
              this.router.navigateByUrl('/');
          },
          error: (error) => {
            console.log(error)
          }
        });
    }
  }
}
