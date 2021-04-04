import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
  providers: [ColorService]
})
export class ColorsComponent implements OnInit {


  constructor(private colorService: ColorService,
    private activatedRoute: ActivatedRoute) { }

  colors: Color[]=[];
  dataLoaded = false;
  message!: string;
  filterText:string="";

  ngOnInit(): void {

    this.getColors();


  };

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
    })
  };

}
