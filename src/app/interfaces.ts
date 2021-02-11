export interface Movie {
  title: string;
  year: number;
  director: string;
  shootingPrice: number;
  rating: number;
  id: number;
}

export interface EditObject {
  movie: Movie;
  index: number;
}
