const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;
const path = require("path");
const exp = require("constants");
app.use(express.static("MiniGame"));

// app.use(express.static(path.join(__dirname, "MiniGame")));

app.use(
  express.static(path.join(__dirname, "/MiniGame.js"), {
    type: "application/javascript",
  })
);
app.use(
  "/MiniGame.css",
  express.static(path.join(__dirname, "/MiniGame.css"), { type: "text/css" })
);
app.use(
  "/GameMenu.html",
  express.static(path.join(__dirname, "/GameMenu.html"), { type: "text/html" })
);
app.use(
  "/GuessNumber.html",
  express.static(path.join(__dirname, "/GuessNumber.html"), {
    type: "text/html",
  })
);
app.use(
  "/RPS.html",
  express.static(path.join(__dirname, "/RPS.html"), { type: "text/html" })
);
app.use(
  "/GuessCoin.html",
  express.static(path.join(__dirname, "/GuessCoin.html"), { type: "text/html" })
);
app.use(
  "/Mine.html",
  express.static(path.join(__dirname, "/Mine.html"), { type: "text/html" })
);
app.use(
  "/StartGame.html",
  express.static(path.join(__dirname, "/StartGame.html"), { type: "text/html" })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "secret-key", resave: true, saveUninitialized: true })
);

// 템플릿 엔진 설정
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "StartGame.html"));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
