import { eProducts } from "./../constants/products";
import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class MediumCoverage extends Product implements IProducts {
  constructor(sellIn: number, price: number) {
    super(eProducts.MEDIUM_COVERAGE, sellIn, price);
  }
}
