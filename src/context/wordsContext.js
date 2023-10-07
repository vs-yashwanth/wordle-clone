import React, { useState, useContext, createContext, useEffect } from "react";
import constants from "../constants";
import useInput from "../hooks/useInput";
import useReduceInput from "../hooks/useReduceInput";

const context = createContext();

const WordsContext = ({ children }) => {
  const initial = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };

  const [words, setWords] = useState(initial);
  const [currentRow, setCurrentRow] = useState(0);
  const input = useInput();
  const reduceInput = useReduceInput(
    words,
    setWords,
    currentRow,
    setCurrentRow
  );

  const resetWords = () => {
    setWords((words) => initial);
    setCurrentRow((currentRow) => 0);
  };

  useEffect(() => {
    reduceInput(input);
  }, [input]);

  useEffect(() => {
    if (currentRow === constants.wordsNumber) {
      alert("Game Over!");
      resetWords();
    }
  }, [currentRow]);

  return <context.Provider value={{ words }}>{children}</context.Provider>;
};

const useWordsContext = () => {
  const wordsContext = useContext(context);
  return wordsContext;
};

export default useWordsContext;
export { WordsContext };
