import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import DetailLeft from "./DetailLeft";
import Ratings from "./Ratings";

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
            <DetailLeft />
            <TextContent>
              <TitleArea>
                <motion.h2>
                  {movie.Title} <motion.span>({movie.Year})</motion.span>{" "}
                </motion.h2>
              </TitleArea>
              <InfoArea>
                <Ratings rated={movie.Rated} />
                <div>{movie.Runtime}</div>
                <div>{movie.Genre.replaceAll(",", "/")}</div>
                <div>{movie.Released}</div>
              </InfoArea>
            </TextContent>
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
  position: relative;
  top: 10%;
  left: 10%;
  color: white;
  z-index: 15;
  display: flex;
  justify-content: space-evenly;
`;

const TextContent = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleArea = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 3rem;
  }

  span {
    font-size: 0.75rem;
  }
`;

const InfoArea = styled(motion.aside)`
  display: flex;
  justify-content: flex-end;
  font-size: 0.5rem;
`;
