import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Movie from "../components/Movie";
import MovieDetails from "../components/MovieDetails";

export default function MovieSearch() {
  const { searched } = useSelector((state) => state.movies);
  const { pathname } = useLocation();
  const pathID = pathname.split("/")[2];

  return (
    <MovieList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathID && <MovieDetails pathID={pathID} />}
        </AnimatePresence>
        <Movies>
          {searched?.Search &&
            searched.Search.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
        </Movies>
      </AnimateSharedLayout>
    </MovieList>
  );
}

const MovieList = styled(motion.div)`
  padding: 0 5rem;

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
