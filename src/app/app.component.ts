import { Component } from "@angular/core";
import { Movie } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  movies: Movie[] = [
    {
      title: "Star Wars",
      year: 1977,
      director: "George Lucas",
      id: 0,
      rating: 1,
      shootingPrice: 300000,
    },
  ];

  handleDeleteMovie(index): void {
    this.movies.splice(index, 1);
    console.log(`Deleted movie with index ${index}`);
  }
}
