import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dia5Page } from './dia5.page';

const routes: Routes = [
  {
    path: '',
    component: Dia5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dia5PageRoutingModule {}
