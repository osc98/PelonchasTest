import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia11PageRoutingModule } from './dia11-routing.module';

import { Dia11Page } from './dia11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia11PageRoutingModule
  ],
  declarations: [Dia11Page]
})
export class Dia11PageModule {}
