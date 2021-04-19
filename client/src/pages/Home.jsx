import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";

export default function MovieSearch() {
  const { searched } = useSelector((state) => state.movies);
  return (
    <MovieList>
      <Movies>
        {searched?.Search &&
          searched.Search.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
      </Movies>
    </MovieList>
  );
}

const MovieList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
  margin-bottom: 2rem;
`;
const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  justify-items: center;
  align-items: center;
  gap: 3rem;
`;
