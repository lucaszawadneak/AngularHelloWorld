import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Movie } from "../interfaces";
@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private readonly url: string =
    "https://angular-crud-3614c-default-rtdb.firebaseio.com/";

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

  getMoviesFromServer(): Observable<any> {
    return this.http.get<any>(`${this.url}/movies.json`);
  }

  handleAssignMovies(): void {
    console.log("assign");
    this.getMoviesFromServer().subscribe((data) => {
      let returnArray = [];
      Object.keys(data).map((i) => returnArray.push(data[i]));
      this.movieWatcher.next(returnArray);
    });
  }

  putMovieToServer(data: Movie): Observable<Movie[]> {
    console.log("POST");
    return this.http.put<Movie[]>(`${this.url}/movies/${data.id}.json`, data);
  }

  getMovies(): Observable<Movie[]> {
    return this.movieWatcher.asObservable();
  }

  pushMovie(data: Movie): void {
    this.movies.push(data);
    this.putMovieToServer(data).subscribe((e) => console.log(e));
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
