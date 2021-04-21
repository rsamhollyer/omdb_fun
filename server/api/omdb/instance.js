const axios = require("axios");
const { omdb } = require("../../config");

const instance = axios.create({
  baseURL: omdb.url,
  timeout: 5000,
  params: {
    apikey: omdb.key,
  },
});

module.exports = instance;
