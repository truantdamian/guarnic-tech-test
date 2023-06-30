import { eProducts } from "./../../constants/products";
import { LowCoverage } from "./../../products/LowCoverage";

describe(`test ${eProducts.LOW_COVERAGE} Product`, () => {
  test(`create Product expect name: ${eProducts.LOW_COVERAGE}`, () => {
    const product = new LowCoverage(0, 1);

    expect(product.name).toEqual(eProducts.LOW_COVERAGE);
  });

  test(`if sellIn>=0 expect that price decrement 1`, () => {
    const product = new LowCoverage(3, 2);
    product.update();

    expect(product.price).toEqual(1);
  });

  test(`if sellIn <0 expect that price decrement 2`, () => {
    const product = new LowCoverage(0, 2);
    product.update();

    expect(product.price).toEqual(0);
  });
});
