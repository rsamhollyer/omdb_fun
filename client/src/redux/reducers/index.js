import { combineReducers } from "redux";
import movieDetailReducer from "./movieReducer";

const rootReducer = combineReducers({
  movies: movieDetailReducer,
});

export default rootReducer;
