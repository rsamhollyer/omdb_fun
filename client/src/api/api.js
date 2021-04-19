import axios from "axios";

const omdbAxios = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 5000,
  params: {
    apikey: process.env.REACT_APP_OMDB_API,
  },
});

export const getOneMovie = async (title) => {
  try {
    const { data } = await omdbAxios.get({
      params: {
        t: title,
        plot: "full",
      },
    });
    return data;
  } catch (err) {
    return console.log(err);
  }
};
