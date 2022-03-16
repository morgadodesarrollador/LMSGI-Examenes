export interface ILibro{
  ID?: string;
  title?: string;
  author?: string;
  content?: string;
  content_short?: string;
  publisher?: string;
  publisher_date?: string;
  pages?: string;
  url_details?: string;
  url_download?: string;
  cover?: string;
  language?: string;

}

export interface ICategoria {
  category_id: string;
  name: string;
}

