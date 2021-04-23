const returns = 284;
const pages = Math.floor(returns / 10);
if (returns % 10) {
  console.log(returns % 10);
}
console.log(pages);
class OMDBService {
  constructor() {}
}

module.exports = new OMDBService();
