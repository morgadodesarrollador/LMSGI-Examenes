import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PbfheaderComponent } from './pbfestructura/pbfheader/pbfheader.component';
import { PbfmainComponent } from './pbfestructura/pbfmain/pbfmain.component';


@NgModule({
  declarations: [
    AppComponent,
    PbfheaderComponent,
    PbfmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
