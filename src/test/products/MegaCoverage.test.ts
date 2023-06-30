import { eProducts } from "./../../constants/products";
import { MegaCoverage } from "./../../products/MegaCoverage";

describe(`test ${eProducts.MEGA_COVERAGE} Product`, () => {
  test(`create Product expect name: ${eProducts.MEGA_COVERAGE}`, () => {
    const product = new MegaCoverage(0, 1);

    expect(product.name).toEqual(eProducts.MEGA_COVERAGE);
  });

  test(`if sellIn>=0 expect price 80`, () => {
    const product = new MegaCoverage(3, 2);
    product.update();

    expect(product.price).toEqual(80);
  });

  test(`if sellIn <0 expect price 80`, () => {
    const product = new MegaCoverage(0, 2);
    product.update();

    expect(product.price).toEqual(80);
  });
});
