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
  setCurrentRow,
  setKeyValidations
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
        setKeyValidations((vals) => ({
          ...vals,
          [word[i]]: getKeyValidation(vals, word[i], "g"),
        }));
      }
    }

    for (let i = 0; i < n; i++) {
      if (new_val[i] === "g") continue;
      if (word[i] in targetWordSet && targetWordSet[word[i]] > 0) {
        targetWordSet[word[i]]--;
        new_val[i] = "y";
        setKeyValidations((vals) => ({
          ...vals,
          [word[i]]: getKeyValidation(vals, word[i], "y"),
        }));
      } else {
        new_val[i] = "r";
        setKeyValidations((vals) => ({
          ...vals,
          [word[i]]: getKeyValidation(vals, word[i], "r"),
        }));
      }
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

const getKeyValidation = (keyVals, ind, potential) => {
  if (keyVals[ind] === "g" || (keyVals[ind] === "y" && potential === "g"))
    return "g";
  else if (keyVals[ind] === 'y' && potential === 'r') return 'y'
  else return potential;
};

export default useValidateInput;
