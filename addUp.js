function addUp(num) {
  if (num > 0) {
    return num + addUp(num - 1);
  }
  return 0;
}
console.log(`addUp(1) -> ${addUp(1)}`);
console.log(`addUp(4) -> ${addUp(4)}`);
console.log(`addUp(13) -> ${addUp(13)}`);
console.log(`addUp(600) -> ${addUp(600)}`);
