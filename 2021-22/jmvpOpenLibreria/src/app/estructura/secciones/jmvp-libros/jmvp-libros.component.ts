import { Component, OnInit } from '@angular/core';
import { ILibro, ICategoria } from 'src/Interfaces/Peliculas';
import { JmvpLibrosService } from 'src/app/services/jmvp-libros.service';
@Component({
  selector: 'app-jmvp-libros',
  templateUrl: './jmvp-libros.component.html',
  styleUrls: ['./jmvp-libros.component.css']
})
export class JmvpLibrosComponent implements OnInit {
  pagina: number = 0;

  public categorias: ICategoria[] = [];
  public peli: ILibro = {};
  public libros: ILibro[] = [];

  constructor(private peliculasService: JmvpLibrosService) { }
  async ngOnInit() {
    this.libros = await this.peliculasService.getAll();
    console.log(this.libros);
    this.categorias = await this.peliculasService.getCategorias();
    console.log(this.categorias);


  }
  // async getLibros(id: string){
  //   console.log(id);
  //   this.peli = await this.peliculasService.getMovie(id);
  //   console.log(this.peli)
  // }
}
