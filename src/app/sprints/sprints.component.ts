import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(UsersComponent);
    // if (this.userComponent != null && this.userComponent.user != undefined) {
    //   console.log(' user authorized');
     
    // } else {
    //   console.warn('user not authorized')
    // }
  }

}
