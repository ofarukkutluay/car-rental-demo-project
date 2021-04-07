import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  constructor(private colorService: ColorService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  addColor() {
    if (this.colorAddForm.valid) {
      let color = this.colorAddForm.value
      this.colorService.addColor(color).subscribe(response => {
        console.log(JSON.stringify(color));
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
