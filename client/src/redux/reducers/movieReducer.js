const initState = {
  movie: {},
};

const movieDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload.movie,
      };

    default:
      return { ...state };
  }
};

export default movieDetailReducer;
