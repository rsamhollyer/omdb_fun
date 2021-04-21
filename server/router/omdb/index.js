const { omdbController } = require("../../controllers");
const route = require("express").Router();
route
  .get("/omdb/search", omdbController.searchMovies)
  .get("/omdb/:imdbId", omdbController.getOneMovie);
module.exports = route;
