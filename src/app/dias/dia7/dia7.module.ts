import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia7PageRoutingModule } from './dia7-routing.module';

import { Dia7Page } from './dia7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia7PageRoutingModule
  ],
  declarations: [Dia7Page]
})
export class Dia7PageModule {}
