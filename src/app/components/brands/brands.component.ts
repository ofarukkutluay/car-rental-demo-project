import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private brandService:BrandService) { }
  brands!:Brand[];
  dataLoaded = false;
  message!: string;
  filterText:string="";
  brand!:Brand;
  ifAdd:boolean=false;

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
    })
  }
  createBrand(id:number,name:string){
    this.brand = {id:id,name:name}
  }
  ifAddBrand(){
    this.ifAdd=true;
  }

}
