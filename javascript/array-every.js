// const numbers = [10, 20, 30, -40, 0, 50];
const numbers = [10, 20, 30, 40, 50, 60];

const allPositive = numbers.every((num) => {
  return num > 0;
});

console.log(allPositive);
