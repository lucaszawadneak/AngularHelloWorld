import { Injectable } from "@angular/core";
import { Movie } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor() {}

  public movies: Movie[] = [
    {
      title: "Star Wars",
      year: 1977,
      director: "George Lucas",
      id: 0,
      rating: 1,
      shootingPrice: 300000,
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  pushMovie(data: Movie): void {
    this.movies.push(data);
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
  }

  editMovie(index: number, data: Movie): void {
    this.movies[index] = data;
  }
}
