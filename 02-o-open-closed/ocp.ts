import {
  FixedAmountDiscount,
  NoDiscount,
  SeasonalDiscount
} from "./Discount";
import { OrderTotal } from "./OrderTotal";

const subtotal = 100;

const regularOrder = new OrderTotal(new NoDiscount());
const seasonalOrder = new OrderTotal(new SeasonalDiscount(0.2));
const loyaltyOrder = new OrderTotal(new FixedAmountDiscount(15));

console.log(`Regular total: $${regularOrder.calculate(subtotal)}`);
console.log(`Seasonal total: $${seasonalOrder.calculate(subtotal)}`);
console.log(`Loyalty total: $${loyaltyOrder.calculate(subtotal)}`);