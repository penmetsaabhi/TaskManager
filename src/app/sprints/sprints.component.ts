import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { global } from '../GlobalVariables';
import { UsersService } from '../users.service';
import { Sprint, User } from '../Models/sprints';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})

export class SprintsComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) {}

  sprints: Sprint | any;
  user : User | any;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData') as string);
    console.log(this.user.userName);
    this.userService.getUsers(this.user.userName)
    .subscribe(
      (response) => {
        this.sprints = response;
      },
      (error) => {
        //TODO
      }
    );
  }

  goToTasks(Id: any) {
    localStorage.setItem("sprintId", Id as string);
    this.router.navigate(['/sprints/tasks']);
  }

  getSprints() {
    return this.sprints;   
  }

}
