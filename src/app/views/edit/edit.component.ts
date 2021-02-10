import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selected = false;

  rating: number = -1;
  title: string = "";
  year: number = 0;
  director: string = "";
  shootingPrice: number = 0;

  handleRegisterMovie(): void {
    console.log("filme adicionado");

    this.rating = -1;
    this.title = "";
    this.year = 0;
    this.director = "";
  }
}
