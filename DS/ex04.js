/**
 * Find the duplicate element in a limited range array
 */
const input = [1, 2, 3, 4, 4, 5, 6, 7, 2, 5, 8, 9];
const unique = input.filter(
  (element, index) => input.indexOf(element) == index
);
const duplicate = input.filter(
  (element, index) => input.indexOf(element) != index
);
console.log(unique);
console.log(duplicate);
