import React, { useState, useContext, createContext, useEffect } from "react";
import constants from "../constants";
import useInput from "../hooks/useInput";
import useReduceInput from "../hooks/useReduceInput";
import useValidateInput from "../hooks/useValidateInput";
import useWords from "../hooks/useWords";

const context = createContext();

const WordsContext = ({ children }) => {
  const initialWords = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };

  const initialValidation = {
    0: [null, null, null, null, null],
    1: [null, null, null, null, null],
    2: [null, null, null, null, null],
    3: [null, null, null, null, null],
    4: [null, null, null, null, null],
    5: [null, null, null, null, null],
  };

  const targetWord = useWords();
  const [words, setWords] = useState(initialWords);
  const [validation, setValidation] = useState(initialValidation);
  const [gameState, setGameState] = useState(null);
  const [currentRow, setCurrentRow] = useState(0);
  const input = useInput();
  const reduceInput = useReduceInput(
    words,
    setWords,
    currentRow,
    setCurrentRow
  );
  const validateInput = useValidateInput(
    words,
    validation,
    setValidation,
    targetWord,
    setGameState
  );

  const resetWords = () => {
    setWords((words) => initialWords);
    setCurrentRow((currentRow) => 0);
    setValidation((vals) => initialValidation);
    setGameState((g) => null);
  };

  useEffect(() => {
    reduceInput(input);
  }, [input]);

  useEffect(() => {
    if (
      currentRow - 1 >= 0 &&
      currentRow - 1 < constants.wordsNumber &&
      words[currentRow - 1].length === constants.wordLength
    ) {
      validateInput(currentRow - 1);
    }
  }, [currentRow]);

  useEffect(() => {
    if (gameState) {
      alert(
        gameState === "success"
          ? "You Won!"
          : `You lost, the word is ${targetWord}`
      );
      resetWords();
    }
  }, [gameState]);

  return (
    <context.Provider value={{ words, currentRow, targetWord, validation }}>
      {children}
    </context.Provider>
  );
};

const useWordsContext = () => {
  const wordsContext = useContext(context);
  return wordsContext;
};

export default useWordsContext;
export { WordsContext };
