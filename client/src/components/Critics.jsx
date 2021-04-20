import { motion } from "framer-motion";
import styled from "styled-components";

function Critics({ ratings }) {
  return (
    <StyledCritic>
      {ratings.map((rating) => {
        return (
          <EachCritic key={rating.Source}>
            <img
              src={
                require(`../assets/images/${rating.Source.replaceAll(
                  " ",
                  ""
                )}.png`).default
              }
              alt="icon"
            />
            <p>{rating.Value}</p>
          </EachCritic>
        );
      })}
    </StyledCritic>
  );
}

const StyledCritic = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;

  img {
    width: 50px;
    height: 50px;
  }
`;

const EachCritic = styled(motion.div)`
  display: flex;
  align-items: center;
  p {
    margin-left: 1rem;
  }
`;

export default Critics;
