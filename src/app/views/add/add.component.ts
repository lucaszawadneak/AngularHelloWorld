import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rating: number = 0;
  title: string = "test";
  year: number = 0;
  director: string = "";

  handleRegisterMovie(): void {
    console.log("filme adicionado");

    this.rating = 0;
    this.title = "";
    this.year = 0;
    this.director = "";
  }
}
