import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentAddComponent } from './components/rent-add/rent-add.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"utilities",component:UtilitiesComponent},
  {path:"brands",component:BrandsComponent, canActivate:[LoginGuard]},
  {path:"cars",component:CarsComponent},
  {path:"cars-list",component:CarsListComponent, canActivate:[LoginGuard]},
  {path:"cars/brands/:brandId",component:CarsComponent},
  {path:"cars/colors/:colorId",component:CarsComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarsComponent},
  {path:"cars/:carId",component:CarDetailComponent},
  {path:"colors",component:ColorsComponent, canActivate:[LoginGuard]},
  {path:"rentals",component:RentalsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"rent",component:RentAddComponent},
  {path:"cars/rent/:carId",component:RentAddComponent},
  {path:"cars/rent/payment/:carId",component:PaymentComponent},
  {path:"payment",component:PaymentComponent},
  {path:"",component:CarsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
