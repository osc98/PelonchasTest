import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia6Page } from './dia6.page';

const routes: Routes = [
  {
    path: '',
    component: Dia6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia6PageRoutingModule {}
