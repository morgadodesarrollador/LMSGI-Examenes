import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ICategoria, ILibro } from 'src/Interfaces/Peliculas';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class JmvpLibrosService {
  private api = 'https://www.etnassoft.com/api/v1/get/?'; //parte fija de la URL a la API

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



  async getCategorias(): Promise<ICategoria[]> {
    const prefix = 'get_categories=all';
    const url = `${this.api}${prefix}`;
    return new Promise ( resolve => {
      this.http.get<ICategoria[]>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve (data)
        })
    })
  }
  async getAll():Promise<ILibro[]>{
    const prefix = "id=589";
    const url = `${this.api}/${prefix}`;
    return new Promise ( resolve => {
      this.http.get<ILibro[]>(url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }




}
