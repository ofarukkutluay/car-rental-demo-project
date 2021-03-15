import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CarsComponent } from './components/cars/cars.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { NaviComponent } from './components/navi/navi.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ColorsComponent,
    CustomersComponent,
    CarsComponent,
    RentalsComponent,
    NaviComponent,
    UtilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
