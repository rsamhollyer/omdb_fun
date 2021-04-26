import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import RatingIcon from "./RatingIcon";

function DetailLeft() {
  const { movie } = useSelector((state) => state.movies);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const starRatings = Array.from(Array(10)).map((x, i) => i + 1);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  return (
    <Stats>
      <Poster>
        <motion.img src={movie.Poster} />
      </Poster>
      <Rating>
        {movie.imdbRating}
        <span>/10</span>
      </Rating>
      <Votes>{movie.imdbVotes}</Votes>
      <YourRating>Rate This</YourRating>
      <Stars>
        {starRatings.map((index) => {
          return (
            <RatingIcon
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
              key={index}
            />
          );
        })}
      </Stars>
    </Stats>
  );
}

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Poster = styled(motion.figure)`
  border: 10px solid white;
`;
const Rating = styled(motion.aside)`
  margin-top: 2rem;
  font-size: 1.5rem;
  span {
    margin-left: 0.3rem;
    font-size: 1rem;
  }
`;
const Votes = styled(motion.span)`
  font-size: 0.9rem;
  text-align: left;
`;
const YourRating = styled(motion.aside)`
  margin-top: 5%;
  font-size: 0.75rem;
`;

const Stars = styled(motion.div)`
  display: flex;
`;

export default DetailLeft;
