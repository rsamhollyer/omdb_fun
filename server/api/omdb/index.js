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
      return this._handleError(err);
    }
  }

  async searchMovie(search,page=1) {
    try {
      const { data } = await this.instance.get("/", {
        params: {
          s: search,
          page,
        },
      });
      return data;
    } catch (err) {
      return this._handleError(err);
    }
  }

  _handleError(err) {
    console.error("SERVICES", err.message);
    return {
      status: err.response.status,
      statusText: err.response.statusText,
      message: err.message,
      error: err.response.data.Error,
    };
  }
}

module.exports = new OMDBAPI();
