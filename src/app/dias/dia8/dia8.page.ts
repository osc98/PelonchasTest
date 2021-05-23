import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dia8',
  templateUrl: './dia8.page.html',
  styleUrls: ['./dia8.page.scss'],
})
export class Dia8Page implements OnInit {

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
      message: 'Al desechar el aceite por el desagüe, llega a mares y ríos, de esta manera el agua no se oxigena y afecta la flora y la fauna acuática',
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