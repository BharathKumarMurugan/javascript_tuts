/**
 * Print TRUE only if the given string start and end with the same vowel
 */
// function regexVar(s) {
//   let re = /^([aeiou]).*\1$/i;

//   return s.match(re);
// }
// console.log(regexVar("aba"));

function reverseString(s) {
  try {
    let result = s.split("").reverse().join("");
    if (typeof s === "string") {
      console.log(result);
    }
  } catch (err) {
    console.log(typeof err);
    console.log(err["TypeError"]);
    console.log(s);
  }
}
reverseString(34234);
