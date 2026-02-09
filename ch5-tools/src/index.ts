import { sum } from "./calc.js";

const printMessage = (msg: string): void => console.log(`Message: ${msg}`);

printMessage("Hello, TypeScript");

const total = sum(100, 200, 300);
console.log(`Total: ${total}`);

const data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));
