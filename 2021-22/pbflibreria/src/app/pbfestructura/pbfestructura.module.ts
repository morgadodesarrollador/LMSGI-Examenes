import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PbfestructuraRoutingModule } from './pbfestructura-routing.module';
import { PbfheaderComponent } from './pbfheader/pbfheader.component';
import { PbfmainComponent } from './pbfmain/pbfmain.component';


@NgModule({
  declarations: [
    PbfheaderComponent,
    PbfmainComponent
  ],
  imports: [
    CommonModule,
    PbfestructuraRoutingModule
  ]
})
export class PbfestructuraModule { }
