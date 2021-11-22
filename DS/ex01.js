/**
 * Given an unsorted integer array, find a pair with the given sum in it.
 */

// brute-force method
function findSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < sum) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == sum) {
          console.log("Pairs: ", arr[i], arr[j]);
        }
      }
    }
  }
}

// hashing method
function findSumHash(arr, sum) {
  let hash = {};
  for (let i = 0; i <= arr.length; i++) {
    let n = arr[i];
    if (hash[sum - n] !== undefined) {
      return [hash[sum - n], i];
    }
    hash[n] = i;
  }
  return [];
}

let a = [8, 7, 2, 5, 3, 1];
findSum(a, 10);
console.log(findSumHash(a, 10));
