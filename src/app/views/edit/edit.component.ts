import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { EditObject, Movie } from "src/app/interfaces";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  public selectedMovie: number = null;

  movieList: Movie[] = [];
  rating: number = -1;
  title: string = "";
  year: number = 0;
  director: string = "";
  shootingPrice: number = 0;
  id: number = -1;

  ngOnInit(): void {
    const movieObservable$ = this.moviesService.getMovies();
    movieObservable$.subscribe((data) => {
      this.movieList = data;
    });
    if (this.selectedMovie) {
      // this.handleAssingValues();
    }
  }

  handleSelectMovie(event): void {
    this.selectedMovie = event.value;
    this.handleAssingValues(event.value);
  }

  handleAssingValues(selected: number) {
    let movie = this.movieList[selected];

    if (movie) {
      this.title = movie.title;
      this.year = movie.year;
      this.director = movie.director;
      this.shootingPrice = movie.shootingPrice;
      this.rating = "Gostei" ? 0 : "Não gostei" ? 1 : 2;
      this.id = movie.id;
    }
  }

  clearState(): void {
    this.selectedMovie = null;
    this.rating = -1;
    this.title = "";
    this.year = 2001;
    this.director = "";
    this.shootingPrice = 1000;
    this.selectedMovie = -1;
  }

  handleEditMovie(): void {
    let movieObject = {
      rating: this.rating,
      title: this.title,
      year: this.year,
      director: this.director,
      shootingPrice: this.shootingPrice,
      id: this.movieList[this.selectedMovie].id,
    };

    const findIndex = this.movieList.findIndex((item) => item.id === this.id);

    console.log(findIndex);

    if (findIndex >= 0) {
      this.moviesService.editMovie(findIndex, movieObject);
      console.log("Filme editado");
      this.clearState();
    }
  }
}
