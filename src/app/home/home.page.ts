import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {

  constructor(private router:Router, private loadingController: LoadingController) {}

  async verPais(){

    this.loading();
    this.router.navigate(['/paises']);
  }


  async loading() {
    const loading = await  this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await loading.present();
    
    const{role} = await loading.onDidDismiss();
    console.log('OnDismiss');
  }
}
