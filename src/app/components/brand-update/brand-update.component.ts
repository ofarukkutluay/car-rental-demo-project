import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  @Input() brand!:Brand;
  brandUpdateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  })
  

  constructor(private brandService: BrandService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brand = this.brandUpdateForm.value
      this.brandService.updateBrand(brand).subscribe(response => {
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
