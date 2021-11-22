const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const result = await fs.readFile("./sample.json");
    console.log(result.toString());
  } catch (e) {
    console.log(e);
  }
}

console.log("****from async");
readFileAsync();

function readFilePromise() {
  return Promise.all([fs.readFile("./sample.json")])
    .then((result) => console.log(result.toString()))
    .catch((e) => console.log(e));
}

console.log("****from promise");
readFilePromise();
