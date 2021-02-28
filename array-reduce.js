const numbers = [1, 2, 3, 4, 5];

const sumValue = numbers.reduce((accumulator, num) => {
  return accumulator + num;
}, 10);

console.log(sumValue);

const coordinates = [
  { x: 1, y: 2 },
  { x: 3, y: 2 },
  { x: 4, y: 3 },
];
const resultValue = coordinates.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.x;
}, 0);
console.log(resultValue);
