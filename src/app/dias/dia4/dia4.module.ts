import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia4PageRoutingModule } from './dia4-routing.module';

import { Dia4Page } from './dia4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia4PageRoutingModule
  ],
  declarations: [Dia4Page]
})
export class Dia4PageModule {}
