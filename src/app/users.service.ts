import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from './Models/sprints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient:HttpClient) { }

  basic_Url = "http://localhost:8080/api/";
  headers1 = new HttpHeaders({'content-type': 'application/json', 'Access-Control-Allow-Origin':'http://localhost:4200/', 
  'Access-Control-Allow-Credentials': 'true'});
  

  getUsers(userName:string) {
    return this.httpClient.get(this.basic_Url + 'getSprintsCreatedByUser/' + userName, {headers :this.headers1});
  }

  validateLogIn(user:JSON) {
    console.log(user);
    return this.httpClient.post(this.basic_Url + '/logIn', user, {headers : this.headers1});
  }

}
