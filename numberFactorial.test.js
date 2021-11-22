const { expect } = require("@jest/globals");
const numberFactorial = require("./numberFactorial");

test("should factorialize 5", () => {
  expect(numberFactorial(5)).toEqual(120);
});
test("should factorialize string 4", () => {
  expect(numberFactorial("4")).toEqual(24);
});
test("should factorialize 8", () => {
  expect(numberFactorial(8)).toEqual(40320);
});
