/**
 * Promise.all()
 */
// const p1 = Promise.resolve(23);
// const p2 = 34;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "fooo");
// });
// Promise.all([p1, p2, p3]).then((result) => console.log(result));

/**
 * Promise.allSettled()
 */
// console.log("*** Promise.allSettled() ***");
// const p4 = Promise.resolve(23);
// const p5 = new Promise((resolve, reject) => setTimeout(reject, 1000, "foo"));
// Promise.allSettled([p4, p5]).then((results) =>
//   results.forEach((item) => console.log(item.status))
// );

/**
 * Promise.any() --> will work on v15 onwards
 */
const p1 = Promise.reject(34);
const p2 = new Promise((resolve, reject) => setTimeout(reject, 300, "Bharath"));
const p3 = new Promise((resolve, reject) => setTimeout(reject, 300, "Kumar"));
const p123 = [p1, p2, p3];
Promise.any(p123).then((result) => {
  console.log(result);
});
