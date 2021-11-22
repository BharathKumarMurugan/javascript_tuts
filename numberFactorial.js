function numberFactorial(num) {
  return num === 0 || num < 0 ? 1 : num * numberFactorial(num - 1);
}
module.exports = numberFactorial;
