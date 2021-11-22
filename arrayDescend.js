const { performance } = require("perf_hooks");

// function arrayDescend1(input) {
//   return input.sort().reverse();
// }

// function arrayDescend2(input) {
//   return input.sort((a, b) => b - a);
// }

// let arr = [5, 2, 9, 4, 6, 1, 0, -3];
// let t1 = performance.now();
// let res1 = arrayDescend1(arr);
// let t2 = performance.now();

// let t3 = performance.now();
// let res2 = arrayDescend2(arr);
// let t4 = performance.now();

// console.log(`arrayDescend1: ${res1}`);
// console.log(`time taken for arrayDescend1: ${t2 - t1} ms`);
// console.log(`arrayDescend2: ${res2}`);
// console.log(`time taken for arrayDescend2: ${t4 - t3} ms`);

let arr = [40, 50, 20, 10, 30];
let t1 = performance.now();
console.log(arr.reduce((a, b) => a + b, 0) / arr.length);
let t2 = performance.now();
console.log(`time taken for arrayDescend1: ${t2 - t1} ms`);
