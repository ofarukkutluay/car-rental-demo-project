import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getByMail(email:string){
    email = email.toString()
    let newPath = environment.apiUrl+"/users/getbyemail?email="+email;
  
    return this.http.get<SingleResponseModel<User>>(newPath)
  }
}
