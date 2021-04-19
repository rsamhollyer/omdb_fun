import axios from "axios";

const omdbAxios = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 5000,
  params: {
    apikey: process.env.REACT_APP_OMDB_API,
  },
});

export const getOneMovie = async (imdbId) => {
  try {
    const { data } = await omdbAxios.get("/", {
      params: {
        i: imdbId,
        plot: "full",
      },
    });
    return data;
  } catch (err) {
    return console.log(err);
  }
};

export const searchMovie = async (search) => {
  try {
    const { data } = await omdbAxios.get("/", {
      params: {
        s: search,
        page: 1,
      },
    });
    return data;
  } catch (err) {
    return console.log(err);
  }
};
