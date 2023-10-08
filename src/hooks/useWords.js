import React, { useEffect, useState } from "react";
import wordsJSON from "../data/answers.json";
import { getRandomNumber } from "../utils/numbersParse";

const useWords = () => {
  const [word, setWord] = useState("");
  const [dep, setDep] = useState(true);

  useEffect(() => {
    const words = wordsJSON.data;
    const randomInd = getRandomNumber(0, words.length);
    setWord(words[randomInd]);
    //console.log(words[randomInd]);
  }, [dep]);

  const getNewWord = () => {
    setDep((dep) => !dep);
  };

  return { targetWord: word, getNewWord };
};

export default useWords;
