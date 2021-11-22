Arr = [1, 2, 3, 5, 6, 7, 10, 22, 35, 50, 56, 60];
// for (let i = 0; i < Arr.length; i++) {
//   if (Arr[i] < 57) {
//     for (let j = 0; j < i; j++) {
//       if (Arr[i] + Arr[j] == 57) {
//         console.log(`YES - ${Arr[i]},${Arr[j]}`);
//       }
//     }
//   }
// }

function findTwoSum(arr, target) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
}

let unsorted = [3, 2, 56, 23, -12, 54, -56, 9];
let sorted = unsorted.sort((a, b) => a - b);
/**
 * When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.

The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:

if it returns a negative value, the value in a will be ordered before b.
if it returns 0, the ordering of a and b won’t change.
if it returns a positive value, the value in b will be ordered before a.
When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.
* Ref: https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677
 */

// console.log(findTwoSum(Arr, 57));

console.log(sorted);
