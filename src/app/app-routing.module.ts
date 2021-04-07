import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentAddComponent } from './components/rent-add/rent-add.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';


const routes: Routes = [
  {path:"utilities",component:UtilitiesComponent},
  {path:"brands",component:BrandsComponent},
  {path:"cars",component:CarsComponent},
  {path:"cars-list",component:CarsListComponent},
  {path:"cars/brands/:brandId",component:CarsComponent},
  {path:"cars/colors/:colorId",component:CarsComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarsComponent},
  {path:"cars/:carId",component:CarDetailComponent},
  {path:"colors",component:ColorsComponent},
  {path:"rentals",component:RentalsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"rent",component:RentAddComponent},
  {path:"cars/rent/:carId",component:RentAddComponent},
  {path:"cars/rent/payment/:carId",component:PaymentComponent},
  {path:"payment",component:PaymentComponent},
  {path:"",component:CarsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
