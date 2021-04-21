import styled from "styled-components";
import { motion } from "framer-motion";
function Ratings({ rated }) {
  return (
    <RatingContainer>
      <motion.img
        src={require(`../assets/images/${rated.replace(" ", "")}.png`).default}
        alt={rated}
      />
    </RatingContainer>
  );
}
const RatingContainer = styled(motion.div)`
  img {
    width: 50px;
  }
`;
export default Ratings;
