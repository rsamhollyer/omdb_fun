import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMovie } from "../redux/actions/movieDetails";

export default function Movie({ movie }) {
  const dispatch = useDispatch();

  const getMovieHandler = () => {
    dispatch(getMovie(movie.imdbID));
  };

  return (
    <StyledMovie onClick={getMovieHandler}>
      <Link to={`/movie/${movie.imdbID}`}>
        <motion.img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Year}</p>
        <TitleArea>
          <motion.h3 title={movie.Title}>{movie.Title}</motion.h3>
        </TitleArea>
      </Link>
    </StyledMovie>
  );
}

const StyledMovie = styled(motion.div)`
  min-height: 20vh;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  h3 {
    font-size: 1rem;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const TitleArea = styled(motion.div)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
