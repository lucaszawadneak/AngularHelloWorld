import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Movie } from "src/app/interfaces";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor() {}

  @Output() pushMovie = new EventEmitter<Movie>();

  ngOnInit(): void {}

  rating: number = -1;
  title: string = "";
  year: number = 0;
  director: string = "";
  shootingPrice: number = 0;

  handleRegisterMovie(): void {
    let movieObject = {
      rating: this.rating,
      title: this.title,
      year: this.year,
      director: this.director,
      shootingPrice: this.shootingPrice,
      id: new Date().getTime(),
    };

    this.pushMovie.emit(movieObject);

    this.rating = -1;
    this.title = "";
    this.year = 0;
    this.director = "";
  }
}
