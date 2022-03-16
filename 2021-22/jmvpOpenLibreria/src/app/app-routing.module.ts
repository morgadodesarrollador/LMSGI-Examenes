import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JmvpAutoresComponent } from './estructura/secciones/jmvp-autores/jmvp-autores.component';
import { JmvpCategoriasComponent } from './estructura/secciones/jmvp-categorias/jmvp-categorias.component';
import { JmvpLibrosComponent } from './estructura/secciones/jmvp-libros/jmvp-libros.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'libros', component:JmvpLibrosComponent },
  { path: 'categorias', component:JmvpCategoriasComponent },
  { path: 'autores', component:JmvpAutoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

