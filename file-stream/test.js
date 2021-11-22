import { createReadStream } from "fs";

async function run() {
  try {
    const stream = createReadStream("./sample.txt", "utf8");
    for await (const chunk of stream) {
      console.log("chunk received");
    }
  } catch (err) {
    console.log(err);
  }
}
run();
