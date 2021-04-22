import axios from "axios";
import config from "../config";

const omdbAxios = axios.create({
  baseURL: config.server.address,
});

export const getOneMovie = async (imdbId) => {
  try {
    const { data } = await omdbAxios.get(`/api/omdb/${imdbId}`, {
      params: {
        i: imdbId,
      },
    });
    return data;
  } catch (err) {
    return console.log(err);
  }
};

export const searchMovie = async (search) => {
  try {
    const { data } = await omdbAxios.get("/api/omdb/search", {
      params: {
        s: search,
      },
    });
    return data;
  } catch (err) {
    return console.log(err);
  }
};
