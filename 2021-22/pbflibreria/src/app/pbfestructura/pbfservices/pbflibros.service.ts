import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilibro, Ilibros,Icategoria } from '../pbfinterfaces/pbflibros';

@Injectable({
  providedIn: 'root'
})
export class PbflibrosService {

  private api = 'https://www.etnassoft.com/api/v1/get/?';

  private params =
    new HttpParams()
      .set('page', 1)

  private  httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: this.params
  };
  constructor(private http: HttpClient) { }

  async getLibro(id: string): Promise<Ilibro>{
    const prefix = 'id=589';
    const url = `${this.api}${prefix}/${id}`;
    console.log(url);
    return new Promise ( resolve => {
      this.http.get<Ilibro>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve(data)
        })
    })

  }
  async getPagina(pagina: number):Promise<Ilibros>{
    const prefix = 'results_range';
    const url = `${this.api}${prefix}`;
    let params1 = new HttpParams()
                  .set("page", pagina)
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<Ilibros>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }
  async getFilter(genero: string):Promise<Ilibros>{ //filtro pot categoria
    const prefix = 'category_id=201';
    const url = `${this.api}${prefix}`;
    let params1 = new HttpParams()
                  .set("with_genres", genero)
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<Ilibros>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }
  async getCategorias(): Promise<Icategoria[]> { //Categorias
    const prefix = 'get_categories=all';
    const url = `${this.api}${prefix}`;
    return new Promise ( resolve => {
      this.http.get<Icategoria[]>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve (data)
        })
    })
  }
  async getAll():Promise<Ilibro[]>{   //Todos los libros
    const prefix = "book_author=all";
    const url = `${this.api}${prefix}`;
    return new Promise ( resolve => {
      this.http.get<Ilibro[]>(url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }




}
