import React, { useState, useContext, createContext } from "react";
const context = createContext();

const WordsContext = ({ children }) => {
  const initial = {
    0: ['initial'],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };
  const [words, setWords] = useState(initial);

    const updateWord = (index, word) => {
      console.log('updating')
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

export default WordsContext;
export { useWordsContext };
