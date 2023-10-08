import React, { useEffect, useState } from "react";
import validWordsJSON from "../data/allowed.json";

const useValidWords = () => {
  const [validWords, setValidWords] = useState(new Set());
  useEffect(() => {
    const words = validWordsJSON.data;
    const wordsSet = new Set();
    for (const word of words) {
      wordsSet.add(word);
    }
    setValidWords((w) => wordsSet);
  }, []);

  const isValidWord = (word) => {
    return validWords.has(word);
  };

  return isValidWord;
};

export default useValidWords;
