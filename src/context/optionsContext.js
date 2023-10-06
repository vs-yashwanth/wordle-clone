import React, { useState, createContext, useContext } from "react";
import constants from "../constants";

const context = createContext();

const OptionsContext = ({ children }) => {
  const defaultOptions = {
    wordLength: constants.wordLength,
    wordsNumber: constants.wordsNumber,
  };

  const [options, setOptions] = useState(defaultOptions);

  return <context.Provider value={{ options }}>{children}</context.Provider>;
};

const useOptionsContext = () => {
  return useContext(context);
};

export default useOptionsContext
export {OptionsContext}