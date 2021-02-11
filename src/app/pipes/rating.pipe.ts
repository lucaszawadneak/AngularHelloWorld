import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rating",
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return "Sim";

      case 1: {
        return "Não";
      }
      case 2:
        return "Que?";
      default:
        return "Erro";
    }
  }
}
