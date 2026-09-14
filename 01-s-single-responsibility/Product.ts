export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export class ProductRepository {
  async findById(id: string): Promise<IProduct> {
    console.log(`Fetching product: ${id}`);
    return {
      id,
      name: `Product ${id}`,
      price: 100
    };
  }
}
