import { CarInsurance } from "./CarInsurance";
import { IProducts } from "./IProducts";
import { createProduct } from "./ProductCreator";

const productsAtDayZero = [
  createProduct("Medium Coverage", 10, 20),
  createProduct("Full Coverage", 2, 0),
  createProduct("Low Coverage", 5, 7),
  createProduct("Mega Coverage", 0, 80),
  createProduct("Mega Coverage", -1, 80),
  createProduct("Special Full Coverage", 15, 20),
  createProduct("Special Full Coverage", 10, 49),
  createProduct("Special Full Coverage", 5, 49),
  createProduct("Super Sale", 3, 6),
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
