// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   console.log("A: ", A);
//   A = A.filter((x) => x >= 1).sort((a, b) => a - b);
//   console.log("sorted: ", A);
//   let x = 1;
//   for (let i = 0; i < A.length; i++) {
//     console.log("x:", x);
//     if (x < A[i]) {
//       return x;
//     }
//     x = A[i] + 1;
//   }
//   return x;
// }

// console.log(solution([1, -2, 1, -3]));

let myArr = [34, 23, 67, 3, 56, -1, 78];

const _mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let arr_l = arr.slice(0, mid);
  let arr_r = arr.slice(mid, arr.length);
  return _mergeArrays(_mergeSort(arr_l), _mergeSort(arr_r));
};
const _mergeArrays = (a, b) => {
  let sortedArr = [];
  while (a.length && b.length) {
    sortedArr.push(a[0] < b[0] ? a.shift() : b.shift());
  }
  while (a.length) {
    sortedArr.push(a.shift());
  }
  while (b.length) {
    sortedArr.push(b.shift());
  }
  return sortedArr;
};
console.log(_mergeSort(myArr));
