import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef:ElementRef) {
    
  }
  title = 'Task-Manager';
  ngAfterViewInit(){
  }  
}
