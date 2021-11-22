const fs = require("fs").promises;

async function readJsonFile() {
  try {
    const data = await fs.readFile("./sample.json", "utf-8");
    console.log(data.toString());
  } catch (err) {
    console.error("error: ", err);
  }
}

readJsonFile();

function Foo(a) {
  return function (a) {
    return a * a;
  };
}
let test = Foo(1);
console.log(test(3));
