import { eProducts } from "./../constants/products";
import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class FullCoverage extends Product implements IProducts {
  constructor(sellIn: number, price: number) {
    super(eProducts.FULL_COVERAGE, sellIn, price);
  }
  updatePrice(): void {
    if (this.sellIn >= 0) {
      this.price = this.price + 1;
    } else {
      this.price = this.price + 2;
    }
  }
}
