const { callOMDB } = require("../../api");

const searchMovies = async (req, res) => {
  const { s } = req.query;
  try {
    const data = await callOMDB.searchMovie(s);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getOneMovie = async (req, res) => {
  const { i } = req.query;

  try {
    const data = await callOMDB.getOneMovie(i);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  searchMovies,
  getOneMovie,
};
