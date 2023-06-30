import { eProducts } from "./../../constants/products";
import { SpecialFullCoverage } from "./../../products/SpecialFullCoverage";

describe(`test ${eProducts.SPECIAL_FULL_COVERAGE} Product`, () => {
  test(`create Product expect name: ${eProducts.SPECIAL_FULL_COVERAGE}`, () => {
    const product = new SpecialFullCoverage(0, 1);

    expect(product.name).toEqual(eProducts.SPECIAL_FULL_COVERAGE);
  });

  test(`if sellIn>=10 expect that price increment 1`, () => {
    const product = new SpecialFullCoverage(12, 2);
    product.update();

    expect(product.price).toEqual(3);
  });

  test(`if sellIn<10 and sellin>5 expect that price increment 2`, () => {
    const product = new SpecialFullCoverage(8, 2);
    product.update();

    expect(product.price).toEqual(4);
  });

  test(`if sellIn<=5 and sellin>0 expect that price increment 3`, () => {
    const product = new SpecialFullCoverage(3, 2);
    product.update();

    expect(product.price).toEqual(5);
  });

  test(`if sellIn<=0 expect that price has 0`, () => {
    const product = new SpecialFullCoverage(0, 2);
    product.update();

    expect(product.price).toEqual(0);
  });
});
