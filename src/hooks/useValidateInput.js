import React from "react";
import constants from "../constants";
import { counter } from "../utils/textParse";
import useValidWords from "./useValidWords";

const useValidateInput = (
  words,
  validation,
  setValidation,
  targetWord,
  setGameState,
  setCurrentRow
) => {
  const isValidWord = useValidWords();

  const validateInput = (rowInd) => {
    const n = constants.wordLength;
    const new_val = [...validation[rowInd]];
    const word = words[rowInd];
    const targetWordSet = counter(targetWord);

    if (!isValidWord(word.join(""))) {
      alert(`${word.join("")} is not a valid word`);
      setCurrentRow((row) => row - 1);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (word[i] === targetWord[i]) {
        new_val[i] = "g";
        targetWordSet[word[i]]--;
      }
    }

    for (let i = 0; i < n; i++) {
      if (new_val[i] === "g") continue;
      if (word[i] in targetWordSet && targetWordSet[word[i]] > 0) {
        targetWordSet[word[i]]--;
        new_val[i] = "y";
      } else new_val[i] = "r";
    }

    if (!new_val.includes("y") && !new_val.includes("r"))
      setGameState("success");
    else if (
      rowInd === constants.wordsNumber - 1 &&
      (new_val.includes("y") || new_val.includes("r"))
    )
      setGameState("failure");

    setValidation((vals) => ({ ...vals, [rowInd]: new_val }));
  };

  return validateInput;
};

export default useValidateInput;
