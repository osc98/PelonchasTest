import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia6PageRoutingModule } from './dia6-routing.module';

import { Dia6Page } from './dia6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia6PageRoutingModule
  ],
  declarations: [Dia6Page]
})
export class Dia6PageModule {}
