import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import DetailLeft from "./DetailLeft";

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
  background: rgba(0, 0, 0, 0.75);
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
  width: 80vw;
  height: 80vh;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: black;
  position: absolute;
  left: 10%;
  color: white;
  z-index: 15;

`;
