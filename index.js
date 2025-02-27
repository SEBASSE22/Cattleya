const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config ();
const {Client} = require ("pg");
const client = new Client ({
  connectionString: process.env.URL_POSTGRESQL,
  ssl: {
    rejectUnauthorized: false,
  },
  
})

client.connect().then(()=> console.log("Connect is fully established")).catch(()=> console.log("Error connecting"))
.finally(()=> client.end());
const app = express();
const server = http.createServer(app);

app.set("port", process.env.PORT || 3000);


app.use(express.static("public"));
app.use(express.static("views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs",{root: "./views"});
});

app.get("/unlogged", (req, res) => {
  res.render("unlogged/login.ejs",{root: "./views"});
});

server.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
