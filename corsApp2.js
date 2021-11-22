const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 4000;

app.get("/", async (req, res) => {
  const { data } = await axios.get("http://localhost:5050/");
  console.log(data);
  res.send(data);
});
app.get("/:id", async (req, res) => {
  const { data } = await axios.get(`http://localhost:5050/${req.params.id}`);
  console.log(data);
  res.send(data);
});

app.listen(PORT, () => console.log(`Server2 is running at port ${PORT}`));
