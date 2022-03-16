import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvolibrosComponent } from './avolibros/avolibros.component'


const routes: Routes = [
  { path: 'avolibros', component: AvolibrosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvoseccionesRoutingModule { }
