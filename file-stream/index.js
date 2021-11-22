/*
import { pipeline, finished } from "stream";
import { createReadStream } from "fs";
import { createServer, request } from "http";
import * as path from "path";

let __dirname = path.resolve();
console.log(__dirname);

const server = createServer((req, res) => {
  console.log(">> request");
  print(req, res).catch((err) => {
    if (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  });
});

async function print(req, res) {
  req.setEncoding("utf8");
  let total = 0;
  for await (let chunk of req) {
    total += chunk.length;
  }
  res.end(`received ${total} characters`);
}

server.listen(4000, () => {
  console.log("listening at 4000");
  const duplex = request({
    port: server.address().port,
    method: "POST",
  });
  pipeline(
    createReadStream(__dirname + "/sample.txt", "utf-8"),
    duplex,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  duplex.on("response", (res) => {
    res.pipe(process.stdout);
    finished(res, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("");
      server.close();
    });
  });
});

*/

import { createReadStream } from "fs";
import { spawn } from "child_process";
import { stdout } from "process";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// not used
async function readFileStream() {
  const stream = createReadStream("./sample.txt", "utf8");
  try {
    for await (const chunk of stream) {
      console.log("chunk received");
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function _spawnPython() {
  let python = spawn("python", ["readFile.py"]);
  console.log(python.stdout.setEncoding("utf8"));
  // return await stdoutReadable(python.stdout.setEncoding("utf8"));
}
async function stdoutReadable(readable) {
  let data;
  for await (const chunk of readable) {
    console.log("chunk received");
    data += JSON.parse(chunk.toString());
  }
  return data;
}

console.log(_spawnPython());

// app.get("/", (req, res) => {
//   res.status(200).send("You are good to go");
// });

// app.get("/readfile", async (req, res) => {
//   const result = await _spawnPython();
//   res.status(200).send(result);
// });
// app.listen(4000, () => console.log("server is at 4000"));

// python.stdout.on("data", (data) => {
//   console.log(data);
// });
// python.stderr.on("data", (data) => {
//   console.error(data.toString());
// });

// python.on("close", (code) => {
//   console.log(`child process ended with code ${code}`);
// });

// readFileStream();
_spawnPython();
