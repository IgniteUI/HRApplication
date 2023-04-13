import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterPageRoutingModule } from './master-page-routing.module';
import { MasterPageComponent } from './master-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxCardModule, IgxGridModule, IgxActionStripModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxListModule, IgxAvatarModule, IgxToggleModule, IgxDialogModule, IgxCheckboxModule, IgxSwitchModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';

@NgModule({
  declarations: [
    MasterPageComponent,
    DashboardComponent,
    AddEventComponent,
    AddRoleToUserComponent
  ],
  imports: [
    CommonModule,
    MasterPageRoutingModule,
    IgxCardModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxInputGroupModule,
    IgxDateTimeEditorModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxListModule,
    IgxAvatarModule,
    IgxToggleModule,
    IgxDialogModule,
    IgxCheckboxModule,
    IgxSwitchModule
  ]
})
export class MasterPageModule {
}
