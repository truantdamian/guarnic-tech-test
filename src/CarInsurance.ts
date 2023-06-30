import { IProducts } from "./IProducts";

export class CarInsurance {
  products: IProducts[];

  constructor(products: IProducts[] = []) {
    this.products = products;
  }

  updatePrice() {
    this.products.forEach((product) => {
      product.updateSellIn();
      product.updatePrice();
    });

    return this.products;
  }
}
