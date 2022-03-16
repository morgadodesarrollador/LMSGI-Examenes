import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PbfseccionesRoutingModule } from './pbfsecciones-routing.module';
import { LibrosComponent } from './libros/libros.component';
import { PbfcategoriasComponent } from './pbfcategorias/pbfcategorias.component';
import { PbfautoresComponent } from './pbfautores/pbfautores.component';



@NgModule({
  declarations: [
    LibrosComponent,
    PbfcategoriasComponent,
    PbfautoresComponent
  ],
  imports: [
    CommonModule,
    PbfseccionesRoutingModule
  ]
})
export class PbfseccionesModule { }
