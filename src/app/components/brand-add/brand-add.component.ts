import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })
  
  constructor(private brandService: BrandService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let brand = this.brandAddForm.value
      this.brandService.addBrand(brand).subscribe(response => {
        console.log(JSON.stringify(brand));
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
