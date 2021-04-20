import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function Ratings({ rated }) {
  const [path, setPath] = useState(rated);
  useEffect(() => {
    try {
      setPath(
        require(`../assets/images/${rated.replace(" ", "")}.png`).default
      );
    } catch (err) {
      console.log(err);
      setPath("");
    }
  }, [rated]);

  return (
    <RatingContainer>
      <motion.img src={path} alt={rated} />
    </RatingContainer>
  );
}
const RatingContainer = styled(motion.div)`
  img {
    width: 5rem;
  }
`;
export default Ratings;
