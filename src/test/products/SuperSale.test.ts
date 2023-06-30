import { eProducts } from "./../../constants/products";
import { SuperSale } from "./../../products/SuperSale";

describe(`test ${eProducts.SUPER_SALE} Product`, () => {
  test(`create Product expect name: ${eProducts.SUPER_SALE}`, () => {
    const product = new SuperSale(0, 1);

    expect(product.name).toEqual(eProducts.SUPER_SALE);
  });

  test(`if sellIn>=0 expect that price decrement 2`, () => {
    const product = new SuperSale(3, 4);
    product.update();

    expect(product.price).toEqual(2);
  });

  test(`if sellIn<0 expect that price decrement 2`, () => {
    const product = new SuperSale(0, 4);
    product.update();

    expect(product.price).toEqual(2);
  });
});
