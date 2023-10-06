import React, { useState, useContext, createContext } from "react";
import useInput from "../hooks/useInput";

const context = createContext();

const WordsContext = ({ children }) => {
    const initial = [
    ["h", "e", "l", "l", "o"],
    ["t", "h", "e"],
    ["p"],
    [],
    [],
    [],
  ];
  const [words, setWords] = useState(initial);
    const input = useInput();

  const updateWord = (index, word) => {
    setWords((words) => ({ ...words, [index]: word }));
  };

  return (
    <context.Provider value={{ words, updateWord }}>
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
