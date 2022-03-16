import { Component, OnInit } from '@angular/core';
import { Icategoria, Ilibro, Ilibros } from '../../pbfinterfaces/pbflibros';
import { PbflibrosService } from '../../pbfservices/pbflibros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  pagina: number = 0;

  public categorias: Icategoria[] = [];
  public libro: Ilibro = {};
  public libros: Ilibro[] = [];

  constructor(private pbflibrosService: PbflibrosService) { }
  async ngOnInit() {
    this.libros = await this.pbflibrosService.getAll();
    console.log(this.libros);
    this.categorias = await this.pbflibrosService.getCategorias();
    console.log(this.categorias);


  }
  
  async getLibro(ID: string){
    console.log(ID);
    this.libro = await this.pbflibrosService.getLibro(ID);
    console.log(this.libro)
  }
  // async getFilter(generoId: string) {
  //   console.log(generoId);
  //   this.libros = await this.pbflibrosService.getFilter(generoId);
  //   console.log (this.libros);
  // }
  // async  getPagina(npagina: number){
  //   this.libros = await this.pbflibrosService.getPagina(npagina);
  //   console.log(this.libros);
  // }
}

