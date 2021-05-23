import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia8PageRoutingModule } from './dia8-routing.module';

import { Dia8Page } from './dia8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia8PageRoutingModule
  ],
  declarations: [Dia8Page]
})
export class Dia8PageModule {}
