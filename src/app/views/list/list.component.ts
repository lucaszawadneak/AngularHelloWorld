import { Component, Input, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { MoviesService } from "src/app/services/movies.service";
import { Movie } from "../../interfaces";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  public movieList: Movie[] = [];

  ngOnInit(): void {
    this.movieList = this.moviesService.getMovies();
  }

  handleEdit(index: number): void {}

  handleDelete(index: number): void {
    this.moviesService.deleteMovie(index);
  }
}
