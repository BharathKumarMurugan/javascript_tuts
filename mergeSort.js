/*
function merge(Arr, p, q, r) {
  let temp = [];

  let i = p,
    j = q + 1,
    k = 0;
  while (i <= q && j <= r) {
    if (Arr[i] < Arr[j]) {
      temp[k++] = Arr[i++];
    } else {
      temp[k++] = Arr[j++];
    }
  }
  while (i <= q) {
    temp[k++] = Arr[i++];
  }
  while (j <= r) {
    temp[k++] = Arr[j++];
  }
  for (let i = r; i >= p; i--) {
    Arr[i] = temp[--k];
  }
}

function mergeSort(Arr, p, r) {
  let q;
  if (p < r) {
    q = (p + r) / 2;
    mergeSort(Arr, p, q);
    mergeSort(Arr, q + 1, r);
    merge(Arr, p, q, r);
  }
}
let Arr = [14, 7, 13, 5, 6, 2, 92, 23, 1];

console.log(Arr);

mergeSort(Arr, 0, Arr.length - 1);

console.log(Arr);
*/

// Merge Sort Implentation (Recursion)
//

function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let Arr = [14, 7, 13, 5, 6, 2, 92, 23, 1];
console.log(Arr);
console.log(mergeSort(Arr));
