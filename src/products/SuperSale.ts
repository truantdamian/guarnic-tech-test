import { IProducts } from "./../IProducts";
import { Product } from "./../Product";

export class SuperSale extends Product implements IProducts {
  updatePrice(): void {
    this.price = this.price - 2;
  }
}
