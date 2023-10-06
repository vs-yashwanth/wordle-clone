import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Word from "./word";

import { useWordsContext } from "../../context/wordsContext";

const WordsList = () => {
  const { words, updateWord } = useWordsContext();

  return (
    <Stack direction="column" spacing={0.8}>
      <Word  />
      <Word />
      <Word />
      <Word />
      <Word />
    </Stack>
  );
};

export default WordsList;
