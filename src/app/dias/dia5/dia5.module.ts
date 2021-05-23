import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dia5PageRoutingModule } from './dia5-routing.module';

import { Dia5Page } from './dia5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dia5PageRoutingModule
  ],
  declarations: [Dia5Page]
})
export class Dia5PageModule {}
