import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvoseccionesRoutingModule } from './avosecciones-routing.module';
import { AvolibrosComponent } from './avolibros/avolibros.component';


@NgModule({
  declarations: [
    AvolibrosComponent
  ],
  imports: [
    CommonModule,
    AvoseccionesRoutingModule
  ]
})
export class AvoseccionesModule { }
