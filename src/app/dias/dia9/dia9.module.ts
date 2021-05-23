import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia9PageRoutingModule } from './dia9-routing.module';

import { Dia9Page } from './dia9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia9PageRoutingModule
  ],
  declarations: [Dia9Page]
})
export class Dia9PageModule {}
