import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Word from "./word";

import useWordsContext from "../../context/wordsContext";
import useOptionsContext from "../../context/optionsContext";

const WordsList = () => {
  const { words, currentRow, validation } = useWordsContext();
  const { options } = useOptionsContext();

  const wordsArray = [];
  for (let i = 0; i < options.wordsNumber; i++) {
    wordsArray.push(
      <Word
        key={i}
        word={words[i]}
        validation={validation[i]}
        selected={currentRow === i}
      />
    );
  }

  return (
    <Stack direction="column" spacing={0.8}>
      {wordsArray}
    </Stack>
  );
};

export default WordsList;
