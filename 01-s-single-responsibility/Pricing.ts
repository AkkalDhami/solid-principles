export class PricingService {
  calculate(price: number): number {
    const tax = price * 0.13;

    console.log(`Calculated tax: $${tax}`);
    return price + tax;
  }
}
