import { IProducts } from "./IProducts";
import { eProducts } from "./constants/products";
import { FullCoverage } from "./products/FullCoverage";
import { LowCoverage } from "./products/LowCoverage";
import { MediumCoverage } from "./products/MediumCoverage";
import { MegaCoverage } from "./products/MegaCoverage";
import { SpecialFullCoverage } from "./products/SpecialFullCoverage";
import { SuperSale } from "./products/SuperSale";

export const createProduct = (
  name: eProducts,
  sellIn: number,
  price: number
): IProducts => {
  switch (name) {
    case eProducts.FULL_COVERAGE:
      return new FullCoverage(sellIn, price);
    case eProducts.MEDIUM_COVERAGE:
      return new MediumCoverage(sellIn, price);
    case eProducts.LOW_COVERAGE:
      return new LowCoverage(sellIn, price);
    case eProducts.MEGA_COVERAGE:
      return new MegaCoverage(sellIn, price);
    case eProducts.SPECIAL_FULL_COVERAGE:
      return new SpecialFullCoverage(sellIn, price);
    case eProducts.SUPER_SALE:
      return new SuperSale(sellIn, price);
    default:
      throw Error(`product ${name} has not implemented`);
  }
};
