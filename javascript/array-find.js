const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridan", age: 25 },
  { name: "John Carte", age: 50 },
];

const result = employees.find((emp) => {
  return emp.name.indexOf("John") > -1;
});

console.log(result);
