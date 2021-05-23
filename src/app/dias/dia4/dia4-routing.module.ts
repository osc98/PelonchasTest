import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia4Page } from './dia4.page';

const routes: Routes = [
  {
    path: '',
    component: Dia4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia4PageRoutingModule {}
