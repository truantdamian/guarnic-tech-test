import { eProducts } from "./../../constants/products";
import { MediumCoverage } from "./../../products/MediumCoverage";

describe(`test ${eProducts.MEDIUM_COVERAGE} Product`, () => {
  test(`create Product expect name: ${eProducts.MEDIUM_COVERAGE}`, () => {
    const product = new MediumCoverage(0, 1);

    expect(product.name).toEqual(eProducts.MEDIUM_COVERAGE);
  });

  test(`if sellIn>=0 expect that price decrement 1`, () => {
    const product = new MediumCoverage(3, 2);
    product.update();

    expect(product.price).toEqual(1);
  });

  test(`if sellIn <0 expect that price decrement 2`, () => {
    const product = new MediumCoverage(0, 2);
    product.update();

    expect(product.price).toEqual(0);
  });
});
