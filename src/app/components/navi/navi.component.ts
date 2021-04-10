import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private brandService: BrandService,
    private colorService: ColorService, private authService: AuthService,
    private userService: UserService,private localStorageService:LocalStorageService) { }

  brands!: Brand[];
  colors!: Color[];
  user?:User

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getByMailUser("omer@omer.com")
  }


  

  getBrands() {
    this.brandService.getBrands().subscribe(resp => {
      if (resp.success == false) {
        console.log(resp.message)
      }
      this.brands = resp.data;
    })
  }

  getColors() {
    this.colorService.getColors().subscribe(resp => {
      if (resp.success == false) {
        console.log(resp.message)
      }
      this.colors = resp.data;
    })
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.authService.logOut();
  }

  getByMailUser(email:string) {
    
    if (email) {
      this.userService.getByMail(email).subscribe(resp => {
        if (resp.success) {
          
          this.user=resp.data
        }
        console.log(resp.message)
      })
    }else{
      console.log(email)
    }
  }




}
