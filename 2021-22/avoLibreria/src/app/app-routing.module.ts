import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'secciones', loadChildren: () => import('./avosecciones/avosecciones.module')
                      .then(m => m.AvoseccionesModule)},

  { path: 'libros', loadChildren: () => import('./avosecciones/avolibros/avolibros.component')
                      .then(m => m.AvolibrosComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
