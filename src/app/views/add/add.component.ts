import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rating: number = -1;
  title: string = "";
  year: number = 0;
  director: string = "";
  shootingPrice: number = 0;

  @Input() pushMovie: Function;

  handleRegisterMovie(): void {
    let movieObject = {
      rating: this.rating,
      title: this.title,
      year: this.year,
      director: this.director,
      shootingPrice: this.shootingPrice,
    };

    this.pushMovie(movieObject);

    this.rating = -1;
    this.title = "";
    this.year = 0;
    this.director = "";
  }
}
