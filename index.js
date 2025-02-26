const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
