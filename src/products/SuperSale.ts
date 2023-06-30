import { eProducts } from "./../constants/products";
import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class SuperSale extends Product implements IProducts {
  constructor(sellIn: number, price: number) {
    super(eProducts.SUPER_SALE, sellIn, price);
  }

  updatePrice(): void {
    this.price = this.price - 2;
  }
}
