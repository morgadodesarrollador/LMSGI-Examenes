import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILibro, ILibros, ICategoria, ICategorias} from '../avointerfaces/avolibros';

@Injectable({
  providedIn: 'root'
})
export class AvolibrosService {
  private api = 'https://openlibra.com/es';

  private params =
    new HttpParams()
      .set('page', 1)
      .set('language', 'es-ES');

      private  httpOptions = {
        headers: new HttpHeaders({
          'Accept' : 'application/json',
        }),
        params: this.params
      };
  constructor(private http: HttpClient) { }

  async getLibro(id: string): Promise<ILibro>{
    const prefix = `book`;
    const url = `${this.api}/${prefix}/${id}`;
    console.log(url);
    return new Promise ( resolve => {
      this.http.get<ILibro>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve(data)
        })
    })
  }

  async getPagina(pagina: number):Promise<ILibros>{
    const url = `${this.api}`;
    let params1 = new HttpParams()
                  .set("page", pagina);
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<ILibros>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }

  async getGeneros(): Promise<ICategorias> {
    const url = `${this.api}`;
    return new Promise ( resolve => {
      this.http.get<ICategorias>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve (data)
        })
    })
  }

}
