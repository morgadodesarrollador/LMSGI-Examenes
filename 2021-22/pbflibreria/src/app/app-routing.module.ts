import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pbfestructura/pbfsecciones/pbfsecciones.module').then (m => m.PbfseccionesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
