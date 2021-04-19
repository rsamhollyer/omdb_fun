require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

const morgan = require("morgan");
const PORT = 5000;
const HOST = "localhost";
const logger = morgan("dev");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(logger);

server.listen(PORT, HOST, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
