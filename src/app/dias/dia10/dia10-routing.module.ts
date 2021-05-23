import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia10Page } from './dia10.page';

const routes: Routes = [
  {
    path: '',
    component: Dia10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia10PageRoutingModule {}

