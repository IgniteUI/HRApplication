import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { AuthService } from 'src/app/services/auth.service';
import { HRDashboardService } from '../../services/hrdashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hRDashboardEventAll: any = null;
  myEvents: any;
  email: any;

  constructor(
    private hRDashboardService: HRDashboardService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.hRDashboardService.getEventAll().subscribe(data => this.hRDashboardEventAll = data);
    this.hRDashboardService.getMyEvents().subscribe(data => this.myEvents = data);
    this.email = this.authService.getEmail();
  }

  public isUserAdmin() {
    return this.authService.isAdmin();
  }

  public eventRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.hRDashboardService.putEvent(args.rowData).subscribe({
        next: (_e) => {
          this.hRDashboardService.getEventAll().subscribe(data => this.hRDashboardEventAll = data);
        },
        error: (_err) => {
          // TODO: handle errors here.
        },
      });
    }
  }

  public eventRowDeleted(args: IRowDataEventArgs) {
    this.hRDashboardService.deleteEvent(args.data.id).subscribe({
      next: (_e) => {
        this.hRDashboardService.getEventAll().subscribe(data => this.hRDashboardEventAll = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }
}
