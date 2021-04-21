require("dotenv").config({ path: "../.env" });

module.exports = {
  omdb: {
    url: process.env.OMDB_API_URL,
    key: process.env.OMDB_API_KEY,
  },
};
