import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./services/movies.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    console.log("oi");
    this.handleGetMoviesFromServer();
  }

  handleGetMoviesFromServer(): void {
    this.movieService.handleAssignMovies();
  }
}
