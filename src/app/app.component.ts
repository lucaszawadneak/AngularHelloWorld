import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Hello World";
  test(): void {
    console.log("test");
    this.title = "Bom dia!";
  }
}
