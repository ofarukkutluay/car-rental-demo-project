import { Component,  OnInit} from '@angular/core';

import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';

import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  constructor(private brandService:BrandService,
    private colorService:ColorService) { }

    brands!:Brand[];
    colors!:Color[];
    brandId!:number;
   colorId!:number;

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(resp=>{
      if (resp.success==false) {
        console.log(resp.message)
      }
      this.brands = resp.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(resp=>{
      if (resp.success==false) {
        console.log(resp.message)
      }
      this.colors = resp.data;
    })
  }
  getSelectedBrand(brandId:number){
    if (this.brandId == brandId) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedColor(colorId:number){
    if (this.colorId == colorId) {
      return true;
    } else {
      return false;
    }
  }

}
