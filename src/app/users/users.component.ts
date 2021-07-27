import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { Sprint, User } from '../Models/sprints';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { global } from '../GlobalVariables';
import { HttpResponse } from '../Models/HttpResponse';
import { LOG_IN_CONSTANTS } from '../Models/constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('errorText')
  errorText!: ElementRef;
  

  constructor(private router: Router, private userService:UsersService) { 
  }
  sprints:any ;
  userLogInForm = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  user: any | undefined;
  isUserValidated: boolean | undefined;
  ngOnInit(): void {
      localStorage.setItem('isAuthenticated', 'false');
  }

  onSigIn() {
    console.log("hi");
    this.userService.validateLogIn(this.userLogInForm.value)
    .subscribe(
      (response) => {
      this.user = response;

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userData', JSON.stringify(this.user));
      this.isUserValidated = true;
      this.router.navigate(['/sprints']);
    },
     (error) => {
      let httpError: HttpResponse = error;
      this.isUserValidated = false;
      this.errorText.nativeElement.textContent = "*" + httpError.error.message;
    });
  }
  goToRegistration() {
    this.router.navigate(['/registration']);
  }
  gotToForgotPassword() {
    this.router.navigate(['/forgotpassword']);
  }
  getUser() {
    return this.convertToUserInterface();
  }
  getSprints() {
    return this.convertToSprintsInterFace();
  }

  convertToSprintsInterFace() {
    let sprintList:Sprint[] = this.sprints;
    return sprintList;
  }

  convertToUserInterface() {
    let user1:User = this.user;
    console.log(user1.Name);
    return user1;
  }

}


