import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';


const routes: Routes = [
  {path:"utilities",component:UtilitiesComponent},
  {path:"brands",component:BrandsComponent},
  {path:"cars",component:CarsComponent},
  {path:"cars/brands/:brandId",component:CarsComponent},
  {path:"cars/colors/:colorId",component:CarsComponent},
  {path:"cars/:carId",component:CarDetailComponent},
  {path:"colors",component:ColorsComponent},
  {path:"rentals",component:RentalsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"",component:CarsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
