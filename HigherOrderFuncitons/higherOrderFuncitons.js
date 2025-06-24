const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// if we rewrite function like this "calculate" will be
// available in all arrays throughout the code

Array.prototype.calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr?.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

// this can also be done using map
console.log(radius?.map(area));

// after putting calculate in Array.prototype we can now call calculate as

console.log(radius.calculate(area));
