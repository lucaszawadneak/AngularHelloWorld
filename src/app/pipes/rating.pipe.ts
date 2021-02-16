import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rating",
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return "Gostei";

      case 1: {
        return "Não gostei";
      }
      case 2:
        return "Entendi foi nada!";
      default:
        return "Erro";
    }
  }
}
