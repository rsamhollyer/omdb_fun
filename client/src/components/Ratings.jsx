import styled from "styled-components";
import { motion } from "framer-motion";
function Ratings({ rated }) {
  return (
    <RatingContainer>
      <motion.img src={require(`../assets/images/${rated}.png`)} alt={rated} />
    </RatingContainer>
  );
}

const RatingContainer = styled(motion.div)``;
export default Ratings;
