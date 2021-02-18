import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private readonly url: string =
    "https://angular-crud-3614c-default-rtdb.firebaseio.com/";

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }
}
