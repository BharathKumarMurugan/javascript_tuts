/* 

Split the below array into 4 different arrays.

1. Array with items that have only alphabets
2. Array with items that have only numbers
3. Array with items that have both alphabets and numbers
4. Array with items that have any characters other than alphabets or numbers

Sample Input: ['123', 123, 'ABC' , 'ac3', '@!1', '^^^']
*/

let alphaArray = [];
let numericArray = [];
let alphaNumericArray = [];
let specialArray = [];

function splitArray(mixedArray) {
  let alphaReg = /^[a-z]+$/gi;
  let alphaNumReg = /^[0-9a-z]+$/gi;
  let specialReg = /^[!@#$%^&*()<>,]+$/g;
  mixedArray.forEach((x) => {
    if (typeof x === "number") {
      return numericArray.push(x);
    }
    if (typeof x === "string") {
      if (x.match(alphaReg)) return alphaArray.push(x);
      if (x.match(alphaNumReg)) return alphaNumericArray.push(x);
      if (x.match(specialReg)) return specialArray.push(x);
      else {
        return x;
      }
    }
  });
  return 0;
}
splitArray(["123", 123, "ABC", 23.5, "ac3", "@!1", "^^^"]);
console.log(`alphaArray: ${alphaArray}`);
console.log(`numericArray: ${numericArray}`);
console.log(`alphaNumericArray: ${alphaNumericArray}`);
console.log(`specialArray: ${specialArray}`);
