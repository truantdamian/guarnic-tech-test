import { IProducts } from "./IProducts";

export class Product implements IProducts {
  _name: string;
  _sellIn: number;
  _price: number;

  constructor(name: string, sellIn: number, price: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get sellIn() {
    return this._sellIn;
  }

  set sellIn(day: number) {
    this._sellIn = day;
  }

  get price() {
    return this._price;
  }

  set price(price: number) {
    if (price < 0 || price > 50) {
      return;
    }

    this._price = price;
  }

  updateSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  updatePrice() {
    if (this.sellIn >= 0) {
      this.price = this.price - 1;
    } else {
      this.price = this.price - 2;
    }
  }

  update() {
    this.updateSellIn();
    this.updatePrice();
  }
}
