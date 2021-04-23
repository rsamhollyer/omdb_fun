const { omdbController } = require("../../controllers");
const route = require("express").Router();
route
  .get("/search", omdbController.searchMovies)
  .get("/:imdbId", omdbController.getOneMovie);
module.exports = route;
