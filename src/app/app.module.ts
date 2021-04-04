import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

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
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { RentAddComponent } from './components/rent-add/rent-add.component';
import {ToastrModule} from "ngx-toastr";
import { PaymentComponent } from './components/payment/payment.component';

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
    FilterMenuComponent,
    FilterPipePipe,
    CarDetailComponent,
    PageNotFoundComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CartComponent,
    RentAddComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
