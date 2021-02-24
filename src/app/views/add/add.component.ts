import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
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

  public readonly currentYear = new Date().getFullYear();

  public movieForm = this.form.group({
    rating: [-1, [Validators.required, Validators.min(0), Validators.max(2)]],
    title: ["", [Validators.minLength(1), Validators.required]],
    year: [
      "",
      [
        Validators.required,
        Validators.min(1800),
        Validators.max(Number(this.currentYear)),
      ],
    ],
    director: ["", Validators.required],
    shootingPrice: ["", [Validators.required,Validators.min(0)]],
  });

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
