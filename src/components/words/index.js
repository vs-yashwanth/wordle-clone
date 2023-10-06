import { Stack } from "@mui/system";
import React from "react";
import Word from "./word";

const WordsList = () => {
  return (
    <Stack direction="column" spacing={0.8}>
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
    </Stack>
  );
};

export default WordsList;
