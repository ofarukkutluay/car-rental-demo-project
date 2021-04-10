import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  TOKEN_KEY='token';
  EMAIL_KEY='email';

  getToken(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
  setToken(token:string){
    localStorage.setItem(this.TOKEN_KEY,token)
  }
  deleteAll(){
    localStorage.clear()
  }
  getEmail(){
    
    return localStorage.getItem(this.EMAIL_KEY)?localStorage.getItem(this.EMAIL_KEY)?.toString:"Mail Bulunamadı"
    
  }
}
