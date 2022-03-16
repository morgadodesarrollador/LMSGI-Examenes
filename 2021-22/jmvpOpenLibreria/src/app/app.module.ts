import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JmvpHeaderComponent } from './estructura/maqueta/jmvp-header/jmvp-header.component';
import { JmvpMainComponent } from './estructura/maqueta/jmvp-main/jmvp-main.component';
import { JmvpLibrosComponent } from './estructura/secciones/jmvp-libros/jmvp-libros.component';


// import { JmvpAutoresComponent } from './estructura/secciones/jmvp-autores/jmvp-autores.component';
// import { JmvpCategoriasComponent } from './estructura/secciones/jmvp-categorias/jmvp-categorias.component';
// import { JmvpLibrosComponent } from './estructura/secciones/jmvp-libros/jmvp-libros.component';

@NgModule({
  declarations: [

    AppComponent,
    JmvpHeaderComponent,
    JmvpMainComponent,

    JmvpLibrosComponent,

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
