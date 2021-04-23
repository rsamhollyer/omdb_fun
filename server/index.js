require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const compression = require("compression");
const PORT = 5000;
const HOST = "localhost";
const routes = require("./router");
const cors = require("cors");
const { httpLogger } = require("./services");

app.use(httpLogger);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(PORT, HOST, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
