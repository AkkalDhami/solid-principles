import { Logger } from "./Logger";
import { NotificationService } from "./Notification";
import { OrderRepository, OrderService } from "./Order";
import { PaymentService } from "./Payment";
import { PricingService } from "./Pricing";
import { ProductRepository } from "./Product";

async function main(): Promise<void> {
  const orderService = new OrderService(
    new ProductRepository(),
    new OrderRepository(),
    new PricingService(),
    new PaymentService(),
    new NotificationService(),
    new Logger()
  );

  const order = await orderService.createOrder(
    "user-1",
    "product-1",
    "john@example.com"
  );

  console.log("Final order:", order);
}

main().catch((error: unknown) => {
  console.error("Order creation failed:", error);
  process.exitCode = 1;
});
