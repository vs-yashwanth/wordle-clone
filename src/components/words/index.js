import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Word from "./word";

import useWordsContext from "../../context/wordsContext";
import useOptionsContext from "../../context/optionsContext";

const WordsList = () => {
  const { words, currentRow } = useWordsContext();
  const { options } = useOptionsContext();

  const wordsArray = [];
  for (let i = 0; i < options.wordsNumber; i++) {
    wordsArray.push(
      <Word key={i} word={words[i]} selected={currentRow === i} />
    );
  }

  return (
    <Stack direction="column" spacing={0.8}>
      {wordsArray}
    </Stack>
  );
};

export default WordsList;
