const myList = [
  "java",
  "python",
  "javascript",
  "go",
  "ruby",
  "swift",
  "nodejs",
];
// order array based on string length
// iterate the sorted array and position the strings in sub-arrays

function getPosition(arr, n) {
  let sortedArr = arr.sort((a, b) => b.length - a.length);
  let counter = 0;
  let resultObj = {};
  let positionCounter = 1;
  let item = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    counter = sortedArr[i].length;
    if (counter > sortedArr[i + 1].length) {
      item.push(sortedArr[i]);
      resultObj[positionCounter - 1] = item;
      positionCounter += 1;
      item = [];
    }
    if (counter == sortedArr[i + 1].length) {
      item.push(sortedArr[i]);
    }
  }
  return resultObj[n - 1] ? resultObj[n - 1] : [];
}
console.log("Result: ", getPosition(myList, 1));
