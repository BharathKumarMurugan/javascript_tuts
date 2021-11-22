const b62 = require("base62/lib/ascii");

const randomUniqueNumber = () => {
  return Math.floor(Math.random() * 1000000) + 1000000;
};
const shortStringGenerator = (shortId) => {
  return b62.encode(shortId);
};

// console.log(`decode Bharath: ${b62.decode("Bharath")}`);
// console.log(`encode 2117337213223: ${b62.encode(2117337213223)}`);
for (let i = 1; i <= 10; i++) {
  let shortID = randomUniqueNumber();
  console.log(
    `ShortID: ${shortID} => shortURL: ${shortStringGenerator(shortID)}`
  );
}
