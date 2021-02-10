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

  handlePushMovie(movie: Movie): void {
    console.log(`Adicionando ${movie.title} a lista!`);
    this.movies.push(movie);
  }

  handleDeleteMovie(index): void {
    this.movies.splice(index, 1);
    console.log(`Deleted movie with index ${index}`);
  }
}
