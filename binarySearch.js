const { performance } = require("perf_hooks");
let arr = [1, 2, 3, 5, 7, 30, 32, 45, 63, 89];

const binarySearch = (arr, item) => {
  if (arr.length <= 1) return arr;
  let low = 0;
  let high = arr.length - 1;
  if (arr[low] === item) {
    return low;
  }
  if (arr[high] === item) {
    return high;
  }
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) return mid;
    if (arr[mid] > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

t1 = performance.now();
console.log("search index: ", binarySearch(arr, 7));
t2 = performance.now();
console.log("time taken: ", t2 - t1);
