import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia14PageRoutingModule } from './dia14-routing.module';

import { Dia14Page } from './dia14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia14PageRoutingModule
  ],
  declarations: [Dia14Page]
})
export class Dia14PageModule {}
