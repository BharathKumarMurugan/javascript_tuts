const { performance } = require("perf_hooks");

function stringReverseUsingRecursion(str) {
  if (str == "") return "";
  else return stringReverseUsingRecursion(str.substr(1)) + str.charAt(0);
}
function stringReverseUsingLoop(str) {
  let newStr = new String();
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
function stringReverseUsingSplit(str) {
  let splittedString = str.split("");
  let reversedStringArray = splittedString.reverse();
  return reversedStringArray.join("");
}

perfTime0 = performance.now();
console.log(stringReverseUsingRecursion("Bharath Kumar Murugan"));
perfTime1 = performance.now();
perfTime2 = performance.now();
console.log(stringReverseUsingLoop("Bharath Kumar Murugan"));
perfTime3 = performance.now();
perfTime4 = performance.now();
console.log(stringReverseUsingSplit("Bharath Kumar Murugan"));
perfTime5 = performance.now();
console.log(
  `exec time of stringReverseUsingRecursion: ${perfTime1 - perfTime0} ms`
);
console.log(`exec time of stringReverseUsingLoop: ${perfTime3 - perfTime2} ms`);
console.log(
  `exec time of stringReverseUsingSplit: ${perfTime5 - perfTime4} ms`
);

module.exports = {
  stringReverseUsingRecursion,
  stringReverseUsingLoop,
  stringReverseUsingSplit,
};
