import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Ratings from "./Ratings";
import Critics from "./Critics";
function DetailRight() {
  const { movie } = useSelector((state) => state.movies);
  return (
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
      <Plot>{movie.Plot}</Plot>
      <Critics ratings={movie.Ratings} />
    </TextContent>
  );
}

const TextContent = styled(motion.section)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

const TitleArea = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  h2 {
    font-size: 2.5rem;
  }

  span {
    font-size: 0.75rem;
  }
`;

const InfoArea = styled(motion.aside)`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.75rem;
  margin: 0.5rem 0;
  div {
    padding: 0 1rem;
  }
`;

const Plot = styled(motion.p)`
  margin-left: 3rem;
  font-size: 0.8rem;
  font-weight: normal;
`;

export default DetailRight;
