import { getOneMovie } from "../../api/api";

export const getMovie = (title) => async (dispatch) => {
  const movieInformation = await getOneMovie(title);

  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      movie: movieInformation,
    },
  });
};
