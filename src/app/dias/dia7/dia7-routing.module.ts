import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia7Page } from './dia7.page';

const routes: Routes = [
  {
    path: '',
    component: Dia7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia7PageRoutingModule {}
