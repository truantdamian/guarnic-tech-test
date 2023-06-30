import { eProducts } from "./../../constants/products";
import { FullCoverage } from "./../../products/FullCoverage";

describe(`test ${eProducts.FULL_COVERAGE} Product`, () => {
  test(`create Product expect name: ${eProducts.FULL_COVERAGE}`, () => {
    const product = new FullCoverage(0, 1);

    expect(product.name).toEqual(eProducts.FULL_COVERAGE);
  });

  test(`if sellIn>=0 expect that price increment 1`, () => {
    const product = new FullCoverage(3, 1);
    product.update();

    expect(product.price).toEqual(2);
  });

  test(`if sellIn<0 expect that price increment 2`, () => {
    const product = new FullCoverage(0, 1);
    product.update();

    expect(product.price).toEqual(3);
  });

  test(`price must not be greather to 50`, () => {
    const product = new FullCoverage(2, 49);
    product.update();
    product.update();

    expect(product.price).toEqual(50);
  });
});
