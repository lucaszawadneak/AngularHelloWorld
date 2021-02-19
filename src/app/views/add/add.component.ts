import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Movie } from "src/app/interfaces";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {}

  public movieForm = this.form.group({
    rating: [-1],
    title: [""],
    year: [0],
    director: [""],
    shootingPrice: [10000],
  });

  rating: number = -1;
  title: string = "";
  year: number = 2001;
  director: string = "";
  shootingPrice: number = 10000;

  clearState() {
    this.movieForm.setValue({
      rating: -1,
      title: "",
      year: 0,
      director: "",
      shootingPrice: 10000,
    });
  }

  handleRegisterMovie(): void {
    console.log(this.movieForm.value);
    this.moviesService.pushMovie({
      ...this.movieForm.value,
      id: new Date().getTime(),
      rating: Number(this.movieForm.value.rating),
    });
    this.clearState();
  }
}
