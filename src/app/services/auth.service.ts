import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private localStorageService:LocalStorageService) { }

  login(loginModel: LoginModel) {
    let newPath = environment.apiUrl + "/auth/login"
    return this.http.post<SingleResponseModel<TokenModel>>(newPath, loginModel)
  }

  register(registerModel:RegisterModel){
    let newPath = environment.apiUrl + "/auth/register"
    return this.http.post<SingleResponseModel<TokenModel>>(newPath,registerModel)
  }

  isAuthenticated() {
    if (this.localStorageService.getToken()) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut(){
    this.localStorageService.deleteAll();
  }


}
