const { callOMDB } = require("../../api");

const searchMovies = async (req, res) => {
  const { s } = req.query;
  try {
    const data = await callOMDB.searchMovie(s);
    if (data.error) {
      throw data;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(err.status).json(err);
  }
};

const getOneMovie = async (req, res) => {
  const { i } = req.query;

  try {
    const data = await callOMDB.getOneMovie(i);
    if (data.error) {
      throw data;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(err.status).json(err);
  }
};

module.exports = {
  searchMovies,
  getOneMovie,
};
