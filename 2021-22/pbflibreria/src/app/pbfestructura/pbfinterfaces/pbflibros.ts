export interface Ilibro{
    ID?: string;
    title?: string;
    author?: string;
    content?: string;
    content_short?: string;
    publisher?: string;
    publisher_date?: string;
    pages?: string;
    language?: string;
    url_details?: string;
    url_download?: string;
    cover?: string;
    thumbnail?: string;
    num_comments?: string;
    categories?: string[];
  }
  
  export interface Ilibros{
    page: number;
    results?: Ilibro[];
  }
  
  export interface Icategoria {
    category_id: string;
    name: string;
  }
  