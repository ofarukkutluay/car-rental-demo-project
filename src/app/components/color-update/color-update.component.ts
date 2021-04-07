import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  })
  @Input() color!:Color;

  constructor(private colorService: ColorService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  updateColor() {
    if (this.colorUpdateForm.valid) {
      let color = this.colorUpdateForm.value
      this.colorService.updateColor(color).subscribe(response => {
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
