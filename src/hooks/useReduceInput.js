import React, { useState, useEffect } from "react";
import constants from "../constants";

const useReduceInput = (words, setWords, currentRow, setCurrentRow) => {
  const reduceInput = (input) => {
    const word = words[currentRow];
    switch (input.action) {
      case "remove": {
        word.pop();
        setWords((words) => ({ ...words, [currentRow]: word }));
        break;
      }

      case "add": {
        if (word.length < constants.wordLength) {
          word.push(input.value.toUpperCase());
          setWords((words) => ({ ...words, [currentRow]: word }));
        }
        break;
      }
      case "enter": {
        if (
          currentRow < constants.wordsNumber &&
          word.length === constants.wordLength
        ) {
          setCurrentRow((cur) => cur + 1);
        } else alert("Word too short!");
        break;
      }
      default:
    }
  };
  return reduceInput;
};

export default useReduceInput;
