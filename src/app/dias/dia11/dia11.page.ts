import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dia11',
  templateUrl: './dia11.page.html',
  styleUrls: ['./dia11.page.scss'],
})
export class Dia11Page implements OnInit {

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
      message: 'Evita empaques de plástico innecesarios y reduce la contaminación',
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