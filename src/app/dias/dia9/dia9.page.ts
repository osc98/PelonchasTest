import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dia9',
  templateUrl: './dia9.page.html',
  styleUrls: ['./dia9.page.scss'],
})
export class Dia9Page implements OnInit {

  constructor(private navCtrl: NavController,public toastController: ToastController,) {
    
   }
   
  ngOnInit() {
  }
  irpagina(ubicacion){
    this.navCtrl.navigateForward(ubicacion);
  }

  showToast() {
    this.toastController.create({
      header: 'Informacion!!!',
      message: 'El transporte es el responsable de mas del 30% de las emisiones de CO2',
      position: 'middle',
      cssClass: 'my-custom-class',
      buttons: [
         {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }
  
  
}