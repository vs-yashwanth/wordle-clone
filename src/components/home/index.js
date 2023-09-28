import React from "react";

import Header from "../header";
import Keyboard from "../keyboard";
import WordsList from "../words";

import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Header />
      <WordsList />
      <Keyboard />
    </Container>
  );
};

export default Home;
