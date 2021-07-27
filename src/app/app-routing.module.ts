import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard, AuthGuardTask } from './auth-guard.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SprintsComponent } from './sprints/sprints.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserRegisrationComponent } from './user-regisration/user-regisration.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] = [
  { path : '', component: UsersComponent},
  { path:'registration', component: UserRegisrationComponent},
  { path:'forgotpassword', component: ForgotPasswordComponent},
  { path : 'sprints', component : SprintsComponent, canActivate : [AuthGuardGuard]},
  { path : 'sprints/tasks', component : TasksComponent, canActivate : [AuthGuardTask]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
