import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvoestructuraRoutingModule } from './avoestructura-routing.module';
import { AvoheaderComponent } from "./avoheader/avoheader.component";
import { AvomainComponent } from './avomain/avomain.component';
import { AvolibrosComponent } from '../avosecciones/avolibros/avolibros.component';


@NgModule({
  declarations: [
    AvoheaderComponent,
    AvomainComponent
  ],
  imports: [
    CommonModule,
    AvoestructuraRoutingModule,
    AvolibrosComponent
  ]
})
export class AvoestructuraModule { }
