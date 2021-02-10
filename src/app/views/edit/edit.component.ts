import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  constructor() {}

  @Input() movie: Movie;
  @Input() movieList: Movie[];

  selected = false;

  rating: number = -1;
  title: string = "";
  year: number = 0;
  director: string = "";
  shootingPrice: number = 0;

  //COLOCAR UM WATCH PARA QUE QUANDO VAR MUDAR, ASSINALAR NOVOS VALORES AOS CAMPOS ACIMA
  selectedMovie: number = -1;

  handleAssingValues() {
    this.rating = this.movie.rating;
    this.title = this.movie.title;
    this.year = this.movie.year;
    this.director = this.movie.director;
    this.shootingPrice = this.movie.shootingPrice;
  }

  ngOnInit(): void {
    if (this.movie) {
      this.selectedMovie = this.movie.id;
      this.handleAssingValues();
    }
  }

  handleRegisterMovie(): void {
    console.log("filme adicionado");

    this.rating = -1;
    this.title = "";
    this.year = 0;
    this.director = "";
  }
}
