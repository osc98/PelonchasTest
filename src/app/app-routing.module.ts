import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dia1',
    loadChildren: () => import('./dias/dia1/dia1.module').then( m => m.Dia1PageModule)
  },
  {
    path: 'dia2',
    loadChildren: () => import('./dias/dia2/dia2.module').then( m => m.Dia2PageModule)
  },
  {
    path: 'dia3',
    loadChildren: () => import('./dias/dia3/dia3.module').then( m => m.Dia3PageModule)
  },
  {
    path: 'dia4',
    loadChildren: () => import('./dias/dia4/dia4.module').then( m => m.Dia4PageModule)
  },
  {
    path: 'dia5',
    loadChildren: () => import('./dias/dia5/dia5.module').then( m => m.Dia5PageModule)
  },
  {
    path: 'dia7',
    loadChildren: () => import('./dias/dia7/dia7.module').then( m => m.Dia7PageModule)
  },
  {
    path: 'dia8',
    loadChildren: () => import('./dias/dia8/dia8.module').then( m => m.Dia8PageModule)
  },
  {
    path: 'dia9',
    loadChildren: () => import('./dias/dia9/dia9.module').then( m => m.Dia9PageModule)
  },
  {
    path: 'dia10',
    loadChildren: () => import('./dias/dia10/dia10.module').then( m => m.Dia10PageModule)
  },
  {
    path: 'dia11',
    loadChildren: () => import('./dias/dia11/dia11.module').then( m => m.Dia11PageModule)
  },
  {
    path: 'dia12',
    loadChildren: () => import('./dias/dia12/dia12.module').then( m => m.Dia12PageModule)
  },
  {
    path: 'dia13',
    loadChildren: () => import('./dias/dia13/dia13.module').then( m => m.Dia13PageModule)
  },
  {
    path: 'dia14',
    loadChildren: () => import('./dias/dia14/dia14.module').then( m => m.Dia14PageModule)
  },
  {
    path: 'dia6',
    loadChildren: () => import('./dias/dia6/dia6.module').then( m => m.Dia6PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
