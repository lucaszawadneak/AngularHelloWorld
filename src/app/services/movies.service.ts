import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Movie } from "../interfaces";
@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private readonly url: string =
    "https://angular-crud-3614c-default-rtdb.firebaseio.com/movies.json";

  constructor(private http: HttpClient) {}

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

  getMoviesFromServer(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  postMovieToServer(data: Movie): Observable<Movie[]> {
    console.log("POST");
    return this.http.post<Movie[]>(this.url, data);
  }

  getMovies(): Observable<Movie[]> {
    return this.movieWatcher.asObservable();
  }

  pushMovie(data: Movie): void {
    this.movies.push(data);
    this.postMovieToServer(data).subscribe((e) => console.log(e));
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
