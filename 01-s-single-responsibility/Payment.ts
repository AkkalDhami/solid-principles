export class PaymentService {
  async charge(amount: number): Promise<string> {
    console.log(`Charging amount: $${amount}`);
    return "success";
  }
}
