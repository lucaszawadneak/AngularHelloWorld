import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Movie } from "../interfaces";

@Injectable({
  providedIn: "root",
})

export class MoviesService {
  private readonly url: string =
    "https://angular-crud-3614c-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient,private toastr: ToastrService) {}

  public movies: Movie[] = [];

  public movieWatcher: BehaviorSubject<Movie[]> = new BehaviorSubject(
    this.movies
  );

  getMoviesFromServer(): Observable<any> {
    return this.http.get<any>(`${this.url}/movies.json`);
  }

  handleAssignMovies(): void {
    this.getMoviesFromServer().subscribe((data) => {
      let returnArray = [];
      Object.keys(data).map((i) => returnArray.push(data[i]));
      this.setMovies(returnArray);
    });
  }

  putMovieToServer(data: Movie): Observable<Movie[]> {
    return this.http.put<Movie[]>(`${this.url}/movies/${data.id}.json`, data);
  }

  deleteMovieFromServer(id:number): Observable<any> {
    return this.http.delete<Movie[]>(`${this.url}/movies/${id}.json`);
  }

  getMovies(): Observable<Movie[]> {
    return this.movieWatcher.asObservable();
  }

  setMovies(data: Movie[]): void {
    this.movies = data;
    this.movieWatcher.next(this.movies);
  }

  pushMovie(data: Movie): void {
    this.putMovieToServer(data).subscribe(()=>console.log('Success!'));
    this.setMovies([...this.movies, data]);
    this.toastr.success(data.title, 'Filme adicionado!');
  }

  deleteMovie(index: number): void {
    let movieID = this.movies[index].id;
    this.deleteMovieFromServer(movieID).subscribe();
    this.movies.splice(index, 1);
    this.setMovies(this.movies);
  }

  editMovie(index: number, data: Movie): void {
    this.putMovieToServer(data).subscribe((event) => console.log(event));
    this.movies[index] = data;
    this.setMovies(this.movies);
    this.toastr.success(data.title, 'Filme editado!');
  }
}
