import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchResults } from "../redux/actions/movieDetails";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.jpg";
export default function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearched = (e) => {
    e.preventDefault();
    dispatch(searchResults(textInput));
    setTextInput("");
  };
  return (
    <StyledNav>
      <Logo>
        <motion.img src={logo} alt="logo" /> <h1>Your Movies</h1>
      </Logo>

      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearched} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: 0;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
