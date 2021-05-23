import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dia3',
  templateUrl: './dia3.page.html',
  styleUrls: ['./dia3.page.scss'],
})
export class Dia3Page implements OnInit {

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
      message: 'Mejora la calidad de aire al haber más áreas verdes, y disminuye la contaminación disminuyendo el flujo automovilístico por consumir productos del hogar.',
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
