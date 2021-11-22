const { expect } = require("@jest/globals");
const {
  stringReverseUsingRecursion,
  stringReverseUsingLoop,
  stringReverseUsingSplit,
} = require("./stringReverse");

test("should reverse given string using recursion", () => {
  expect(stringReverseUsingRecursion("Bharath")).toMatch(/htarahB/);
});

test("should reverse given string using loop", () => {
  expect(stringReverseUsingLoop("Bharath Kumar")).toMatch(/ramuK htarahB/);
});

test("should reverse given string using split", () => {
  expect(stringReverseUsingSplit("Bharath Kumar Murugan")).toMatch(
    /naguruM ramuK htarahB/
  );
});
