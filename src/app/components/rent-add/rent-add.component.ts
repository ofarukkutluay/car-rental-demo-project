import { Component, Input, OnInit, Output } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';

import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rent-add',
  templateUrl: './rent-add.component.html',
  styleUrls: ['./rent-add.component.css']
})
export class RentAddComponent implements OnInit{

  rentalAddForm = new FormGroup({
    carId: new FormControl('', Validators.required),
    customerId: new FormControl('', Validators.required),
    rentDate: new FormControl('', Validators.required),
    returnDate: new FormControl('', Validators.required)
  });
  rental!: Rental;
  cars: CarDto[]=[];
  customers!: Customer[];
  currentCar!: CarDto;
  apiUrl:string=environment.staticFilesUrl;

  constructor(private rentalService: RentalService,
    private carService: CarService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }
 


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {
        let carId = params['carId'];
        this.getCarDetailsById(carId);
      }else{
        this.getCarsDetails();
      }
    })
    this.getCustomers();
  }


  getCarsDetails() {
    this.carService.getCarsDetails().subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe(resp=>{
      this.currentCar=resp.data[0]
    })
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
    })
  }

  createRental(){
    if (this.rentalAddForm.valid) {
      this.rental = this.rentalAddForm.value
      console.log(JSON.stringify(this.rental));
      this.toastrService.success("Ödeme Sayfasına yönlendiriliyorsunuz!","Başarılı");
      //this.router.navigate(["cars/rent/payment/"+this.rental.carId]);
    }else {
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }
  }

  addRental() {
    if (this.rentalAddForm.valid) {
      this.rental = this.rentalAddForm.value
      this.rentalService.addRental(this.rental).subscribe(response => {
        console.log(JSON.stringify(this.rental));
        this.toastrService.success(response.message, "Başarılı");
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              , "Doğrulama hatası")
          }
        }
      })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }
  }
}
