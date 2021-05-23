import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia10PageRoutingModule } from './dia10-routing.module';

import { Dia10Page } from './dia10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia10PageRoutingModule
  ],
  declarations: [Dia10Page]
})
export class Dia10PageModule {}
