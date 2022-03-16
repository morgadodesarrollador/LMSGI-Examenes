
export interface ILibro{
  id?: string;
  language?: string;
  title?: string;
  overview?: string;
  poster_path?: string;
  popularity?: string;
  vote_average?: string;
  adult?: string;
  genre_ids?: string[];
}

export interface ILibros{
  page: number;
  results?: ILibro[];
}

export interface ICategoria {
  id: string;
  name: string;
}
export interface ICategorias {
  genres?: ICategoria[]
}
