# S - Single Responsibility Principle

> A class should have one reason to change.

The Single Responsibility Principle (SRP) does not mean that a class can have
only one method. It means that a class should focus on one closely related
responsibility.

## Example

This example creates an order while keeping each responsibility in its own
class:

| File | Responsibility |
| --- | --- |
| `Product.ts` | Finds product information |
| `Pricing.ts` | Calculates tax and the final price |
| `Order.ts` | Coordinates order creation and stores orders |
| `Payment.ts` | Charges the customer |
| `Notification.ts` | Sends the order confirmation |
| `Logger.ts` | Writes log messages |
| `srp.ts` | Composes the services and runs the example |

`OrderService` coordinates the workflow, but it does not calculate prices,
charge payments, send emails, or write logs itself. Those responsibilities are
delegated to focused classes.

## Order flow

1. Find the product.
2. Calculate the price including tax.
3. Create and store the order.
4. Charge the customer.
5. Send an order confirmation.
6. Log the completed order.

## Why this helps

When one behavior changes, the related class is the main place that needs to be
updated. Smaller responsibilities also make classes easier to understand,
test, and reuse.

## Run the example

From the repository root, run:

```bash
npx tsx 01-s-single-responsibility/srp.ts
```
