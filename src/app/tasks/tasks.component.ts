import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskUpdateForm = new FormGroup({
    taskTitle : new FormControl(''),
    description : new FormControl(''),
    priority : new FormControl(''),
    taskStatus : new FormControl('')
  });
  
  tasks: Task | any;
  constructor(private userService:UsersService) { }
  enableTaskEdit: boolean | undefined;
  
  ngOnInit(): void {
    console.log(localStorage.getItem("sprintId"));
    this.enableTaskEdit = false; 
    this.userService.getTasks(localStorage.getItem("sprintId") as string)
    .subscribe(
      (response) => {
        this.tasks = response;
        console.log(this.tasks);
    },
     (error) => {

    });
  }

  openPopUp() {
    this.enableTaskEdit = true; 
  }

  getTasks() {
    return this.tasks;
  }
}
