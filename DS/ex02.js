/**
 * Given an integer array, check if it contains a subarray having zero-sum.
 */

function findZeroSum(arr) {
  let total = 0;
  let s = [];
  let item = [];
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    item.push(arr[i]);
    if (total == 0) {
      s.push(item);
      item = [];
    }
  }
  return s;
}
let myarr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
console.log(findZeroSum(myarr));
