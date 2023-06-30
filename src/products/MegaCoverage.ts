import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class MegaCoverage extends Product implements IProducts {
  updateSellIn() {
    this.sellIn = this.sellIn;
  }

  get price() {
    return this._price;
  }

  set price(price: number) {
    if (price !== 80) {
      return;
    }

    this._price = price;
  }

  updatePrice() {
    this.price = 80;
  }
}
