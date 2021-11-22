const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5050;

// app.use(cors());
const corsOptions = {
  origin: "http://localhost:6000",
  optionsSuccessStatus: 200,
};
app.get("/", (req, res) => {
  res.status(200).send("Hello world!!");
});

app.get("/:name", cors(corsOptions), (req, res, nxt) => {
  res.status(200).send(`Hello, ${req.params.name} & only from PORT 6000`);
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
