import { CarInsurance } from "./CarInsurance";
import { IProducts } from "./IProducts";
import { createProduct } from "./ProductCreator";
import { eProducts } from "./constants/products";

const productsAtDayZero = [
  createProduct(eProducts.MEDIUM_COVERAGE, 10, 20),
  createProduct(eProducts.FULL_COVERAGE, 2, 0),
  createProduct(eProducts.LOW_COVERAGE, 5, 7),
  createProduct(eProducts.MEGA_COVERAGE, 0, 80),
  createProduct(eProducts.MEGA_COVERAGE, -1, 80),
  createProduct(eProducts.SPECIAL_FULL_COVERAGE, 15, 20),
  createProduct(eProducts.SPECIAL_FULL_COVERAGE, 10, 49),
  createProduct(eProducts.SPECIAL_FULL_COVERAGE, 5, 49),
  createProduct(eProducts.SUPER_SALE, 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product: IProducts) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

console.log(`Day 0`);
productsAtDayZero.forEach(productPrinter);
console.log("-------------------------------------");
console.log("\n");

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log("name, sellIn, price");
  carInsurance.updatePrice().forEach(productPrinter);
  console.log("-------------------------------------");
  console.log("\n");
}
