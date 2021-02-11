import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "../../interfaces";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input() movies: Movie[];
  @Input() onDelete: Function;

  ngOnInit(): void {}

  handleEdit(id) {
    console.log(`Editing movie with id ${id}`);
  }

  handleDelete(index) {
    this.onDelete(index);
  }
}
