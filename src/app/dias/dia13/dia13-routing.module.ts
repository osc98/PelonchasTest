import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia13Page } from './dia13.page';

const routes: Routes = [
  {
    path: '',
    component: Dia13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia13PageRoutingModule {}
