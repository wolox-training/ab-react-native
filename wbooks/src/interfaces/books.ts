export interface BookDetail {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

export type Book = Pick<BookDetail, 'id' | 'author' | 'title' | 'imageUrl'>;
