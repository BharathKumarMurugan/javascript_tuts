let chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_!$%<>";
let charsLen = chars.length;
let result = "";
for (let i = 0; i < 16; i++) {
  result += chars.charAt(Math.floor(Math.random() * charsLen));
}
console.log(result);
