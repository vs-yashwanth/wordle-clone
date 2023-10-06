import React from "react";

import Header from "../header";
import Keyboard from "../keyboard";
import WordsList from "../words";

import WordsContext from "../../context/wordsContext";

import { Container, Stack } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ bgcolor: "gray" }}>
      <WordsContext>
        <Stack
          direction="column"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <Header />
          <WordsList />
          <Keyboard />
        </Stack>
      </WordsContext>
    </Container>
  );
};

export default Home;
