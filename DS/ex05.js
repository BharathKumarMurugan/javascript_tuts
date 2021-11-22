/**
 * Given an integer array, find the largest subarray formed by consecutive integers. The subarray should contain all distinct values.
 */
const input = [1, 2, 3, 4, 4, 5, 6, 7, 2, 5, 8, 9];
const unique = input.filter(
  (element, index) => input.indexOf(element) == index
);
const sum = unique.reduce((a, b) => a + b, 0);
console.log(sum);
