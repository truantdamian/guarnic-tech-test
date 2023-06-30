export interface IProducts {
  name: string;
  sellIn: number;
  price: number;
  updatePrice(): void;
  updateSellIn(): void;
  update(): void;
}
