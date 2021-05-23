import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia11Page } from './dia11.page';

const routes: Routes = [
  {
    path: '',
    component: Dia11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia11PageRoutingModule {}
