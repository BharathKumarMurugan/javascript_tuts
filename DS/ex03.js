/**
 * Sort binary array in linear time
 */

// method 1
function method1() {
  let zeroArr = [];
  let oneArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 0) {
      zeroArr.push(0);
    } else oneArr.push(1);
  }
  return [...zeroArr, ...oneArr];
}
// method 2
function method2() {
  let zeroArr = [];
  let oneArr = [];
  input.forEach((ele, i) => (ele == 0 ? zeroArr.push(ele) : oneArr.push(ele)));
  return [...zeroArr, ...oneArr];
}
const input = [1, 0, 1, 0, 1, 0, 0, 1];
console.log(input.sort());
