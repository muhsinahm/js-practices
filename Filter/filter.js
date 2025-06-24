const arr = [5, 1, 2, 3];

function isOdd(x) {
  return x % 2;
}
const output = arr.filter(isOdd);

console.log("Output of isOdd function", output);
