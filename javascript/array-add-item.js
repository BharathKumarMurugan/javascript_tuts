/**
 * Add Items to an Array with push() and unshift()
 * unshift() --> adds at the beginning of the array
 * puhs()    --> adds at the end of the array
 */
const mixedNumbers = (arr) => {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
};
console.log(mixedNumbers(["VI", 5, "six"]));
