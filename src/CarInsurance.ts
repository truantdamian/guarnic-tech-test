import { IProducts } from "./IProducts";

export class CarInsurance {
  products: IProducts[];

  constructor(products: IProducts[] = []) {
    this.products = products;
  }

  updatePrice() {
    this.products.forEach((product) => {
      product.update();
    });

    return this.products;
  }
}
