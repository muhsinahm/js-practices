console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");

// million lines of code
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate <= startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");
// how will it behave?
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 0);
console.log("End");
