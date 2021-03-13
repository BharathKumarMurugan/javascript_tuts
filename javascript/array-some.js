const numbers = [10, 20, 30, 40, 50, 0];

const renderedValue = numbers.some((num) => {
  return num > 0;
});

console.log(renderedValue);

const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridon", age: 25 },
  { name: "John Carte", age: 50 },
];

let indexValue = -1;
const resultValue = employees.some((emp, index) => {
  const isFound = emp.name.indexOf("Mike") > -1;
  if (isFound) indexValue = index;
  return isFound;
});

console.log(resultValue, indexValue);
