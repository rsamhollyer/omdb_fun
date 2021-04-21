const express = require("express");
const router = express.Router();

router.use("/api", require("./omdb"));

module.exports = router;
