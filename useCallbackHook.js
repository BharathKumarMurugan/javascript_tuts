const factory = () => {
  return (a, b) => a + b;
};

const sum1 = factory();
const sum2 = factory();

console.log(sum1(1, 3));
console.log(sum2(1, 3));

console.log(typeof factory);
