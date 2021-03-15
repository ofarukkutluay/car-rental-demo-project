import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';


const routes: Routes = [
  {path:"utilities",component:UtilitiesComponent},
  {path:"utilities/brands",component:BrandsComponent},
  {path:"utilities/cars",component:CarsComponent},
  {path:"utilities/colors",component:ColorsComponent},
  {path:"rentals",component:RentalsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"",component:RentalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
