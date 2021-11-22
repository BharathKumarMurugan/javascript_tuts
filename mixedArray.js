/**
 * From the given mixed array breakdown into indivdual arrays for
 * alphabets, numbers, alphanumeric, special chars, boolean
 */

let alphaArr = [];
let numArr = [];
let alphaNumArr = [];
let specialArr = [];
let boolArr = [];

function splitArray(arr) {
  let alphaReg = /^[a-z]+$/gi;
  let alphaNumReg = /^[a-z0-9]+$/gi;
  let specialReg = /^[!@#$%^&*()<>,.:;']+$/gi;
  arr.forEach((x) => {
    if (typeof x === "number") return numArr.push(x);
    if (typeof x === "boolean") return boolArr.push(x);
    if (typeof x === "string") {
      if (x.match(alphaReg)) return alphaArr.push(x);
      if (x.match(alphaNumReg)) return alphaNumArr.push(x);
      if (x.match(specialReg)) return specialArr.push(x);
    } else return x;
  });
  return 0;
}
let arr = [123, "123", "true", false, "ac4", "ABC", 45.67, "as&", "$%^"];
splitArray(arr);
console.log("alphaArr: ", alphaArr);
console.log("numArr: ", numArr);
console.log("alphaNumArr: ", alphaNumArr);
console.log("specialArr: ", specialArr);
console.log("boolArr: ", boolArr);
