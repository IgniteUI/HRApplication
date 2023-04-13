import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';

const routes: Routes = [{ path: '', component: MasterPageComponent, children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }, { path: 'add-event', component: AddEventComponent, data: { text: 'Add Event' } }, { path: 'add-role-to-user', component: AddRoleToUserComponent, data: { text: 'Add role to user' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPageRoutingModule {
}
