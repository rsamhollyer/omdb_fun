import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const dispatch = useDispatch();
  return (
    <StyledMovie>
      <Link to={`/movie/${movie.imdbID}`}>
        <motion.h3>{movie.Title}</motion.h3>
        <p>{movie.Year}</p>
        <motion.img src={movie.Poster} alt={movie.Title} />
      </Link>
    </StyledMovie>
  );
}

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
