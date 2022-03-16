import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JmvpAutoresComponent } from './jmvp-autores/jmvp-autores.component';
import { JmvpCategoriasComponent } from './jmvp-categorias/jmvp-categorias.component';



@NgModule({
  declarations: [
    JmvpAutoresComponent,
    JmvpCategoriasComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SeccionesModule { }
