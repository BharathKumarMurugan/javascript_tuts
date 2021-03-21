/**
 * Remove Items from an Array with pop() and shift()
 * pop()   --> removes at the end of the array
 * shift() --> removes at the begnning of the array
 */
const popShift = (arr) => {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
};

console.log(popShift(["challenge", "is", "not", "complete"]));
