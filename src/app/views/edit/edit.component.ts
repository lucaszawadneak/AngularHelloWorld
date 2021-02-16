import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EditObject, Movie } from "src/app/interfaces";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  constructor(private movieService: MoviesService) {}

  //COLOCAR UM WATCH PARA QUE QUANDO VAR MUDAR, ASSINALAR NOVOS VALORES AOS CAMPOS DE MOVIE
  @Input() selectedMovie: number = null;
  @Output() editMovie = new EventEmitter<EditObject>();

  movieList: Movie[] = [];
  rating: number = -1;
  title: string = "";
  year: number = 0;
  director: string = "";
  shootingPrice: number = 0;

  handleAssingValues() {
    let movie = this.movieList[this.selectedMovie];

    console.log(movie);

    this.rating = movie.rating;
    this.title = movie.title;
    this.year = movie.year;
    this.director = movie.director;
    this.shootingPrice = movie.shootingPrice;
  }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovies();
    if (this.selectedMovie) {
      this.handleAssingValues();
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes.selectedMovie);
  // }

  // handleSelectMovie(a) {
  //   console.log(a);
  // }

  handleEditMovie(): void {
    let movieObject = {
      rating: this.rating,
      title: this.title,
      year: this.year,
      director: this.director,
      shootingPrice: this.shootingPrice,
      id: this.movieList[this.selectedMovie].id,
    };

    this.editMovie.emit({ movie: movieObject, index: this.selectedMovie });
    console.log("Filme editado");

    this.rating = -1;
    this.title = "";
    this.year = 0;
    this.director = "";
    this.selectedMovie = -1;
  }
}
