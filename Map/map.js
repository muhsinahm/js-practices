import { users } from "./data.js";
const arr = [5, 1, 2, 3];

function double(x) {
  return x * 2;
}

function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);

console.log("Output of double function", output);

const fName = users?.map((x) => x?.firstName + " " + x?.lastName);
console.log("First Names", fName);
