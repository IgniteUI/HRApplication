import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HRDashboardService } from 'src/app/services/hrdashboard.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  emails: string;
  category: string;
  title: string;
  date: string;
  errorMessage: string;

  constructor(private hrApiService: HRDashboardService,
    private router: Router) {}

  onSubmit(event) {
    event.preventDefault();
    const splitEmails = this.emails.split(', ');
    if (this.emails && this.category && this.title && this.date) {
      this.hrApiService.postEvent({ category: this.category, title: this.title, date: this.date, userEmails: splitEmails})
        .subscribe({
          next: (response) => {
              console.log(response)
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
