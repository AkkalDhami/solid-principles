import { Discount } from "./Discount";

export class OrderTotal {
  constructor(private readonly discount: Discount) {}

  calculate(subtotal: number): number {
    const total = this.discount.apply(subtotal);
    return Number(total.toFixed(2));
  }
}
