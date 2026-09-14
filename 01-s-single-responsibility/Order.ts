import { NotificationService } from "./Notification";
import { PaymentService } from "./Payment";
import { PricingService } from "./Pricing";
import { IProduct, ProductRepository } from "./Product";
import { Logger } from "./Logger";

export interface OrderData {
  userId: string;
  productId: string;
  price: number;
}

export interface Order extends OrderData {
  id: string;
}

export class OrderRepository {
  async create(data: OrderData): Promise<Order> {
    return {
      id: `order-${data.userId}-${data.productId}`,
      ...data
    };
  }
}

export class OrderService {
  async createOrder(
    userId: string,
    productId: string,
    email: string
  ): Promise<Order> {
    const product: IProduct = await this.productRepository.findById(productId);

    const price = this.pricingService.calculate(product.price);

    const order = await this.orderRepository.create({
      userId,
      productId,
      price
    });

    await this.paymentService.charge(price);

    await this.notificationService.sendOrderConfirmation(email, order.id);

    this.logger.log(`Created order '${order.id}' for ${email}`);

    return order;
  }

  constructor(
    private readonly productRepository: ProductRepository,
    private readonly orderRepository: OrderRepository,
    private readonly pricingService: PricingService,
    private readonly paymentService: PaymentService,
    private readonly notificationService: NotificationService,
    private readonly logger: Logger
  ) {}
}
