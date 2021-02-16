import { Component, Input, OnDestroy, OnInit } from "@angular/core";
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
    const movieObservable = this.moviesService.getMovies();
    movieObservable.subscribe((data) => {
      console.log(data);
      this.movieList = data;
    });
  }
  handleEdit(index: number): void {}

  handleDelete(index: number): void {
    this.moviesService.deleteMovie(index);
  }
}
