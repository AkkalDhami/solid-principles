# O - Open/Closed Principle

> Software entities should be open for extension but closed for modification.

`OrderTotal` calculates an order total through the `Discount` interface. It does
not need to change when a new discount rule is introduced. Add a new class that
implements `Discount`, then pass it to `OrderTotal`.

This example includes:

- `NoDiscount` for regular orders
- `SeasonalDiscount` for percentage-based discounts
- `FixedAmountDiscount` for loyalty discounts

To add a new rule, create another `Discount` implementation instead of adding
another conditional branch to `OrderTotal`.