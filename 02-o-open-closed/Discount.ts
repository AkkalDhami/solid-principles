export interface Discount {
  apply(subtotal: number): number;
}

export class NoDiscount implements Discount {
  apply(subtotal: number): number {
    return subtotal;
  }
}

export class SeasonalDiscount implements Discount {
  constructor(private readonly percentage: number) {}

  apply(subtotal: number): number {
    return subtotal * (1 - this.percentage);
  }
}

export class FixedAmountDiscount implements Discount {
  constructor(private readonly amount: number) {}

  apply(subtotal: number): number {
    return Math.max(0, subtotal - this.amount);
  }
}
