const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT | 6694;
const helmet = require("helmet");
const cors = require("cors");
app.use(express.json());
app.use(helmet());
app.use(cors());
app.listen(PORT, () => {
  console.log("Listening on http://localhost:6694");
});
app.get("/artwork", (req, res) => {
  res.json(paintings);
});
app.post("/artwork", (req, res) => {
  res
    .json({
      message: "Recived!",
    })
    .status(200);
  paintings.push(req.body);
});
app.get("/raw", (req, res) => {
  const arr = paintings.map((p) => p.url);
  res.json(arr);
});
app.get("/links", (req, res) => {
  const arr = paintings.map((p) => p.url);
  res.json(arr);
});
app.get("/delete/19/:index", (req, res) => {
  console.log(req.params.index);
  if (isNaN(req.params.index)) {
    res.json({
      message: "Invalid parameter!",
      sc: 404,
    });
  } else {
    const nummed = Number(req.params.index);
    paintings.splice(nummed, 1);
    res.json(paintings);
  }
});
app.all("*", (req, res) => {
  res
    .json({
      sc: 404,
      message: "Invalid endpoint hit!",
    })
    .status(400);
});
const paintings = [];
