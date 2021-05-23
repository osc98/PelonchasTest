import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dia5',
  templateUrl: './dia5.page.html',
  styleUrls: ['./dia5.page.scss'],
})
export class Dia5Page implements OnInit {

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
      message: 'Reducir la producción de desechos de plástico, además de que el bambú se descompone fácilmente y se puede utilizar como composta.',
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
