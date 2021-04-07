import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm = new FormGroup({
    brandId: new FormControl('', Validators.required),
    colorId: new FormControl('', Validators.required),
    modelYear: new FormControl('', Validators.required),
    dailyPrice: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  brands!: Brand[];
  colors!: Color[];

  constructor(private carService: CarService,
    private toastrService: ToastrService, private brandService: BrandService,
    private colorService: ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
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



  addCar() {
    if (this.carAddForm.valid) {
      let car = this.carAddForm.value
      this.carService.addCar(car).subscribe(response => {
        console.log(JSON.stringify(car));
        this.toastrService.success(response.message, "Başarılı");
        window.location.reload();
      }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage
              , "Doğrulama hatası")
          }
        }
      })
    } else {
      this.toastrService.error("Form bilgileri eksik", "Dikkat")
    }
  }

}
