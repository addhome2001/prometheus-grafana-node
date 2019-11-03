const express = require("express");
const { Counter, Registry } = require("prom-client");

const app = express();
const register = new Registry();
const counter = new Counter({
  name: "request_counts",
  help: "Total of request counts",
  registers: [register]
});

app.get("/", function(req, res) {
  counter.inc();
  console.log("Count increased");
  res.json({ status: "ok" });
});

app.get("/metrics", function(req, res) {
  res.set("Content-Type", register.contentType);
  res.send(register.metrics());
});

app.listen(5000, () => {
  console.log("App is running at port 5000");
});
