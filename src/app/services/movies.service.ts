import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
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

  public movieWatcher: BehaviorSubject<Movie[]> = new BehaviorSubject(
    this.movies
  );

  getMovies(): Observable<Movie[]> {
    return this.movieWatcher.asObservable();
  }

  pushMovie(data: Movie): void {
    this.movies.push(data);
    this.movieWatcher.next(this.movies);
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
    this.movieWatcher.next(this.movies);
  }

  editMovie(index: number, data: Movie): void {
    console.log("Edit");
    this.movies[index] = data;
  }
}
