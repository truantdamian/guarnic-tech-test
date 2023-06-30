import { eProducts } from "./../constants/products";
import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class LowCoverage extends Product implements IProducts {
  constructor(sellIn: number, price: number) {
    super(eProducts.LOW_COVERAGE, sellIn, price);
  }
}
