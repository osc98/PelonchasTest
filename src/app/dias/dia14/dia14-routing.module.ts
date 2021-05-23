import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia14Page } from './dia14.page';

const routes: Routes = [
  {
    path: '',
    component: Dia14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia14PageRoutingModule {}
