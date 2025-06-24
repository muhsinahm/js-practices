import { users } from "../Map/data.js";

const arr = [5, 11, 2, 3, 6];

//sum

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr?.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("Find Sum", findSum(arr));

//write above code using reduce

const output = arr.reduce(function (acc, current) {
  acc = acc + current;
  return acc;
}, 5);

console.log("Sum using reduce", output);

// max

const maxNum = function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log("max is ", maxNum(arr));

// max using reduce function

const reduceOutput = arr?.reduce(function (max, current) {
  if (current > max) {
    max = current;
  }
  return max;
}, 0);

console.log("Output using reduce", reduceOutput);

//print frequency of ages

const ageFreq = users?.reduce(function (acc, curr) {
  if (acc[curr?.age]) {
    acc[curr?.age] = ++acc[curr?.age];
  } else {
    acc[curr?.age] = 1;
  }
  return acc;
}, {});

console.log("Age Freq", ageFreq);

//first name of all peoples with age < 30

const peopleUnderAge = users
  ?.filter((x) => x?.age < 30)
  .map((x) => x?.firstName);

console.log("People under 30", peopleUnderAge);
