import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "money",
})
export class MoneyPipe implements PipeTransform {
  transform(value: number): string {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(value);
  }
}
