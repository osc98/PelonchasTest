import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia13PageRoutingModule } from './dia13-routing.module';

import { Dia13Page } from './dia13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia13PageRoutingModule
  ],
  declarations: [Dia13Page]
})
export class Dia13PageModule {}
