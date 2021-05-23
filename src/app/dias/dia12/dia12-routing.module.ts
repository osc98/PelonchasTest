import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia12Page } from './dia12.page';

const routes: Routes = [
  {
    path: '',
    component: Dia12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia12PageRoutingModule {}
