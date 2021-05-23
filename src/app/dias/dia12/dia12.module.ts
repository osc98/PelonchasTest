import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia12PageRoutingModule } from './dia12-routing.module';

import { Dia12Page } from './dia12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia12PageRoutingModule
  ],
  declarations: [Dia12Page]
})
export class Dia12PageModule {}
