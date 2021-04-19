import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MovieDetails({ pathID }) {
  const { movie } = useSelector((state) => state.movies);
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {movie.imdbID === pathID && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <motion.h3>{movie.Title}</motion.h3>
                <motion.h3>{movie.Year}</motion.h3>
                <motion.h3>{movie.Released}</motion.h3>
              </div>
              <Info>
                <motion.h3>{movie.Rated}</motion.h3>
              </Info>
            </Stats>
            <Media>
              <div>
                <motion.img src={movie.Poster} />
              </div>
            </Media>
            <motion.h4>{movie.BoxOffice}</motion.h4>
            <Description>
              <motion.p>{movie.Plot}</motion.p>
            </Description>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  scrollbar-width: thin;
  scrollbar-color: #ff7676 white;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 15;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  div {
    width: 50%;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;
