import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia8Page } from './dia8.page';

const routes: Routes = [
  {
    path: '',
    component: Dia8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia8PageRoutingModule {}
