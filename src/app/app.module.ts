import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SprintsComponent } from './sprints/sprints.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersService } from './users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisrationComponent } from './user-regisration/user-regisration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuardGuard, AuthGuardTask } from './auth-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SprintsComponent,
    TasksComponent,
    UserRegisrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, AuthGuardGuard, AuthGuardTask],
  bootstrap: [AppComponent]
})
export class AppModule { }
