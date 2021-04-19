const initState = {
  movie: {},
  searched: {},
};

const movieDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload.movie,
      };

    case "SEARCH_MOVIE":
      return { ...state, searched: action.payload.searched };

    default:
      return { ...state };
  }
};

export default movieDetailReducer;
