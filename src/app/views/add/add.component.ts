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

  handleRegisterMovie(): void {
    console.log("filme adicionado");

    this.rating = -1;
    this.title = "";
    this.year = 0;
    this.director = "";
  }
}
