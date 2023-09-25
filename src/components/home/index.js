import React from "react";

import Header from "../header";
import Keyboard from "../keyboard";
import WordsList from "../words";

const Home = () => {
  return (
    <div>
      <Header />
      <WordsList />
      <Keyboard />
    </div>
  );
};

export default Home;
