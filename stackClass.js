function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}
function push(element) {
  return (this.dataStore[this.top++] = element);
}
function pop() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top - 1];
}
function length() {
  return this.top;
}
function clear() {
  this.top = 0;
}

// let s = new Stack();
// s.push("Bharath");
// s.push("Kumar");
// s.push("Murugan");
// s.push("Bharath Kumar");
// console.log("length: " + s.length());
// console.log(s.peek());
// let popped = s.pop();
// console.log(`popped: ${popped}`);
// console.log(s.peek());
// s.push("Bharath Kumar Murugan");
// console.log(s.peek());
// console.log("length: " + s.length());

/**
 * If given string is palindrome
 */
function isPalindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = new String();
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word === rword) {
    return true;
  } else return false;
}
word = "racecar";
if (isPalindrome(word)) {
  console.log("Yes Palindrome");
} else {
  console.log("Not a Palindrome");
}
