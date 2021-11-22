const { performance } = require("perf_hooks");

function findLongestWord(sen) {
  let newSen = sen.replace(/[!@#$%^&*()<>.,?'";:_\-+=0-9\\]/gi, "").split(" ");
  console.log(newSen);
  let longestWordCount = 0;
  let longestWord = new String();
  for (let i = 0; i < newSen.length; i++) {
    if (longestWordCount < newSen[i].length) {
      longestWordCount = newSen[i].length;
      longestWord = newSen[i];
    } else continue;
  }
  return longestWord;
}
let sen = "Bharath12 Kumar!&@ Murugan#%12 is looking for De@vel$%oper position";
// let t0 = performance.now();

// console.log(`longest word in given sentence: ${findLongestWord(sen)}`);
// let t1 = performance.now();

// console.log(`time taken: ${t1 - t0} ms`);

function myFunction(newSen) {
  let longestWordCount = 0;
  let longestWord = new String();
  for (let i = 0; i < newSen.length; i++) {
    if (longestWordCount < newSen[i].length) {
      longestWordCount = newSen[i].length;
      longestWord = newSen[i];
    } else continue;
  }
  return longestWord;
}

console.log(
  `longest word in given sentence: ${myFunction(["I", "need", "candy"])}`
);
