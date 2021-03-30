import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ColorsComponent,
    CustomersComponent,
    CarsComponent,
    RentalsComponent,
    NaviComponent,
    UtilitiesComponent,
    NavMenuComponent,
    FilterPipePipe,
    CarDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
