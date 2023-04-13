import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddEventComponent } from './master-page/add-event/add-event.component';
import { AddRoleToUserComponent } from './master-page/add-role-to-user/add-role-to-user.component';
import { AdminGuard } from './guards/admin-guard';
import { AnonymousGuard } from './guards/anonymous-guard';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'master-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-page', loadChildren: () => import('./master-page/master-page.module').then(m => m.MasterPageModule), canActivate: [AuthGuard]},
  { path: 'register-page', component: RegisterPageComponent, data: { text: 'Register Page' }, canActivate: [AnonymousGuard]},
  { path: 'login-page', component: LoginPageComponent, data: { text: 'Login' }, canActivate: [AnonymousGuard]},
  { path: 'add-event', component: AddEventComponent, data: { text: 'Add Event' }, canActivate: [AdminGuard]},
  { path: 'add-role-to-user', component: AddRoleToUserComponent, data: { text: 'Add Role' }, canActivate: [AdminGuard]},
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
