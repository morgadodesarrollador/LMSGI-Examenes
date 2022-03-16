import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { PbfautoresComponent } from './pbfautores/pbfautores.component';
import { PbfcategoriasComponent } from './pbfcategorias/pbfcategorias.component';

const routes: Routes = [

  { path: 'libros', component: LibrosComponent },
  { path: 'categorias', component: PbfcategoriasComponent },
  { path: 'autores', component: PbfautoresComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PbfseccionesRoutingModule { }
