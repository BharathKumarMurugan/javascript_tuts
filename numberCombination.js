/*
num = 243;
let result = [];
let temp = "";

a = num.toString().split(""); // ['2','4','3']
// remove 0th position
b = a.splice(0, 1); // => b=['2'] & a=['4','3']
//insert b[0] at 0th position
a.splice(0, 0, b[0]); // => ['2','4','3']
// append new "a" to result
temp = a.join("");
result.push(parseInt(temp));
a = [];
temp = "";

a = num.toString().split(""); // ['2','4','3']
// remove 0th position
b = a.splice(0, 1); // => b=['2'] & a=['4','3']
//insert b[0] at 1th position
a.splice(1, 0, b[0]); // => ['4','2','3']
// append new "a" to result
temp = a.join("");
result.push(parseInt(temp));
a = [];
temp = "";

a = num.toString().split(""); // ['2','4','3']
// remove 0th position
b = a.splice(0, 1); // => b=['2'] & a=['4','3']
//insert b[0] at 2th position
a.splice(2, 0, b[0]); // => ['4','3','2']
// append new "a" to result
temp = a.join("");
result.push(parseInt(temp));
a = [];
temp = "";

console.log(result);
*/

const { performance } = require("perf_hooks");
function combinationOfDigits(num) {
  let numLength = num.toString().length;
  let result = [];
  for (let i = 0; i < numLength; i++) {
    let splittedNumber = num.toString().split("");
    for (let j = 0; j < numLength; j++) {
      // remove ith position from splittedNumber
      let removedElement = splittedNumber.splice(i, 1);
      // insert removedElement at jth position
      splittedNumber.splice(j, 0, removedElement[0]);
      // append splittedNumber to result
      let temp = splittedNumber.join("");
      temp = parseInt(temp);
      if (result.includes(temp)) {
        break;
      } else result.push(temp);
    }
  }
  return result;
}
// let t1 = performance.now();
console.log(combinationOfDigits(123));
// let t2 = performance.now();
// console.log(`time taken: ${t2 - t1} ms`);
