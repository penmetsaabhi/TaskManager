import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Sprint, User } from '../Models/sprints';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { global } from '../GlobalVariables';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private userService:UsersService) { 
  }
  sprints:any ;
  userLogInForm = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  clickMessage = '';
  user: any | undefined;
  ngOnInit(): void {
      this.userService.getUsers('abhirav').subscribe(Data => {
        this.sprints = Data;
      });
      localStorage.setItem('isAuthenticated', 'false');
    }

  onSubmit() {
    console.log("hi");
    this.userService.validateLogIn(this.userLogInForm.value).subscribe(Data => {
      this.user = Data;
      console.log(JSON.stringify(Data));
      global.setAuthentication(true);
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/sprints']);
    });
  }
  onClickMe(userName: string, password:string) {
    this.clickMessage = userName;
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


