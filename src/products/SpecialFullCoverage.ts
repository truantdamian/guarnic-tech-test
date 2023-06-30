import { eProducts } from "./../constants/products";
import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class SpecialFullCoverage extends Product implements IProducts {
  constructor(sellIn: number, price: number) {
    super(eProducts.SPECIAL_FULL_COVERAGE, sellIn, price);
  }

  updatePrice() {
    if (this.sellIn > 10) {
      this.price = this.price + 1;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.price = this.price + 2;
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.price = this.price + 3;
    } else {
      this.price = 0;
    }
  }
}
