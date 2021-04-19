import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MovieDetails() {
  const { movie } = useSelector((state) => state.detail);
  const history = useHistory();

  return <div></div>;
}
