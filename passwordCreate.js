/**
 * get two strings (eg: abc, def)
 * create password --> adbecf
 */

let str1 = "abc";
let str2 = "def";

str1Length = str1.length;
str2Length = str2.length;

let result = "";
let lastChar = "";
let range;
if (str2Length > str1Length) {
  range = str1Length;
  lastChar = str2.substring(range, str2Length);
} else if (str2Length < str1Length) {
  range = str2Length;
  lastChar = str1.substring(range, str1Length);
} else {
  range = str1Length;
  lastChar = "";
}
console.log(range);

for (let i = 0; i < range; i++) {
  let concat = str1.charAt(i) + str2.charAt(i);
  result += concat;
}
console.log("lastChar: ", lastChar);
console.log(`result: ${result + lastChar}`);
