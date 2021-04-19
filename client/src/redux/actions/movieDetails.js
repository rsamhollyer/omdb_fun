import { getOneMovie, searchMovie } from "../../api/api";

export const getMovie = (title) => async (dispatch) => {
  const movieInformation = await getOneMovie(title);

  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      movie: movieInformation,
    },
  });
};

export const searchResults = (search) => async (dispatch) => {
  const results = await searchMovie(search);
  dispatch({
    type: "SEARCH_MOVIE",
    payload: { searched: results },
  });
};
