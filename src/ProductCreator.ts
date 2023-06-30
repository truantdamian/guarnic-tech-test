import { IProducts } from "./IProducts";
import { FullCoverage } from "./products/FullCoverage";
import { LowCoverage } from "./products/LowCoverage";
import { MediumCoverage } from "./products/MediumCoverage";
import { MegaCoverage } from "./products/MegaCoverage";
import { SpecialFullCoverage } from "./products/SpecialFullCoverage";
import { SuperSale } from "./products/SuperSale";

export const createProduct = (
  name: string,
  sellIn: number,
  price: number
): IProducts => {
  switch (name) {
    case "Full Coverage":
      return new FullCoverage(name, sellIn, price);
    case "Medium Coverage":
      return new MediumCoverage(name, sellIn, price);
    case "Low Coverage":
      return new LowCoverage(name, sellIn, price);
    case "Mega Coverage":
      return new MegaCoverage(name, sellIn, price);
    case "Special Full Coverage":
      return new SpecialFullCoverage(name, sellIn, price);
    case "Super Sale":
      return new SuperSale(name, sellIn, price);
    default:
      throw Error(`product ${name} has not implemented`);
  }
};
