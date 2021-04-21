const axios = require("axios");
const { omdb } = require("../../config");

class OMDBAPI {
  constructor() {
    const instance = axios.create({
      baseURL: omdb.url,
      params: {
        apikey: omdb.key,
      },
    });

    this.instance = instance;
  }
  async getOneMovie(imdbId) {
    try {
      const { data } = await this.instance.get("/", {
        params: {
          i: imdbId,
          plot: "full",
        },
      });
      return data;
    } catch (err) {
      return console.log(err);
    }
  }

  async searchMovie(search) {
    try {
      const { data } = await this.instance.get("/", {
        params: {
          s: search,
          page: 1,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = new OMDBAPI();
