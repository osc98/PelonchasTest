import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia9Page } from './dia9.page';

const routes: Routes = [
  {
    path: '',
    component: Dia9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia9PageRoutingModule {}
