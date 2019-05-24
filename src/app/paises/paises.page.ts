import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-paises",
  templateUrl: "./paises.page.html",
  styleUrls: ["./paises.page.scss"]
})
export class PaisesPage implements OnInit {
  paises: any = [];

  paisId:any;
  constructor(private service: RestService) {}

  ngOnInit() {
    this.service.getPaises().then(
      datos => {
        this.paises = datos;
        console.log(this.paises);
      },
      error => {
        console.log(error);
      }
    );
  }

  onClick(index){
    console.log(index);


    this.paisId = this.paises[index];
    console.log(this.paisId.name);
    alert(this.paisId.name);
  }
}
