import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  @Input() carId!: number;
  carUpdateForm = new FormGroup({
    id: new FormControl(''),
    brandId: new FormControl('', Validators.required),
    colorId: new FormControl('', Validators.required),
    modelYear: new FormControl('', Validators.required),
    dailyPrice: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    findeksScore:new FormControl('',Validators.required)
    
  })
  car!:Car;
  brands!: Brand[];
  colors!: Color[];

  constructor(private carService: CarService,
    private toastrService: ToastrService, private brandService: BrandService,
    private colorService: ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCar(this.carId);
  }

  getBrands() {
    this.brandService.getBrands().subscribe(resp => {
      if (resp.success == false) {
        console.log(resp.message)
      }
      this.brands = resp.data;
    })
  }
  createCar(id:number){
    
    this.carService.getCarById(id).subscribe(resp=>{
      this.car= Object.assign({},resp.data[0]) 
      console.log(this.car)
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

  updateCar() {
    if (this.carUpdateForm.valid) {
      let color = this.carUpdateForm.value
      this.carService.updateCar(color).subscribe(response => {
        console.log(JSON.stringify(color));
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
