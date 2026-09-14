export class NotificationService {
  async sendOrderConfirmation(email: string, orderId: string): Promise<string> {
    console.log(`Sending order '${orderId}' to ${email}`);
    return `Order ${orderId} sent to ${email}`;
  }
}
