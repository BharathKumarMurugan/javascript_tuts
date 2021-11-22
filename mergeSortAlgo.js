let arr = [32, 5, 45, 89, 63, 3, 2, 7, 30, 1];
let newArr = [];
function mergeSort(arr, p, r, name) {
  let q;
  if (p < r) {
    q = parseInt((p + r) / 2);
    console.log(`${name} => p: ${p}, q: ${q}, r: ${r}`);
    mergeSort(arr, p, q, "f1");
    mergeSort(arr, q + 1, r, "f2");
    // console.log(`mergesort --> arr: [${arr}], p: ${p}, q: ${q}, r: ${r}`);
    merging(arr, p, q, r);
  }
}
function merging(arr, p, q, r) {
  let k = 0,
    i = p,
    j = q + 1;
  while (i <= q && j <= r) {
    if (arr[i] < arr[j]) {
      newArr[k++] = arr[i++];
    } else {
      newArr[k++] = arr[j++];
    }
  }
  while (i <= q) {
    newArr[k++] = arr[i++];
  }
  while (j <= r) {
    newArr[k++] = arr[j++];
  }
}

// console.log(`unsorted: ${arr}`);
// mergeSort(arr, 0, arr.length - 1);
// console.log(`sorted: ${newArr}`);

// function merge2(left, right) {
//   let newArr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       newArr.push(left.shift());
//     } else {
//       newArr.push(right.shift());
//     }
//   }
//   return [...newArr, ...left, ...right];
// }
// function mergeSort2(arr) {
//   let mid = parseInt(arr.length / 2);
//   if (arr.length < 2) return arr;
//   const left = arr.splice(0, mid);
//   console.log("mergeSort2(left): ", mergeSort2(left));
//   console.log("mergeSort2(arr): ", mergeSort2(arr));
//   return merge2(mergeSort2(left), mergeSort2(arr));
// }
// console.log(mergeSort2(arr));

console.log(`unsorted: ${arr}`);
const _mergeArrays = (a, b) => {
  const c = [];

  while (a.length && b.length) {
    console.log(`**a.len :${a.length}, b.len: ${b.length}`);
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    console.log(`#a.len :${a.length}`);
    c.push(a.shift());
  }
  while (b.length) {
    console.log(`%%b.len: ${b.length}`);
    c.push(b.shift());
  }
  console.log("C ==> ", c);
  return c;
};

const _mergeSort = (a) => {
  if (a.length < 2) return a;
  const middle = Math.floor(a.length / 2);
  const a_l = a.slice(0, middle);
  const a_r = a.slice(middle, a.length);
  console.log(`a_l: ${a_l} ----- a_r: ${a_r}`);
  const sorted_l = _mergeSort(a_l);
  const sorted_r = _mergeSort(a_r);
  return _mergeArrays(sorted_l, sorted_r);
};
console.log(_mergeSort(arr));
