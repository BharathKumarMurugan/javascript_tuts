const { performance } = require("perf_hooks");

function checkPrimeNumbersNormal(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function checkPrimeNumbersFast(n) {
  if (n <= 1) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

let n = 11;

console.log(checkPrimeNumbersNormal(n) ? `${n} is prime` : `${n} not a prime`);
console.log(checkPrimeNumbersFast(n) ? `${n} is prime` : `${n} not a prime`);
