require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const path = require("path");
const env = process.env;
const app = express();

const isDevelopment = env.NODE_ENV === "development";

app.use(logger(isDevelopment ? "dev" : "combined"));

app.get("/ping", function(req, res) {
  res.send("pong");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: new Date()
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = isDevelopment ? 3000 : 80;

app.listen(port, () => {
  console.log("listening: " + env.NODE_ENV);
});
