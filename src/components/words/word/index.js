import { Stack } from "@mui/system";
import React from "react";
import CharBox from "./charBox";

import useOptionsContext from "../../../context/optionsContext";

const Word = ({ word, selected }) => {
  const { options } = useOptionsContext();

  const boxes = [];
  for (let i = 0; i < options.wordLength; i++) {
    boxes.push(<CharBox key={i} char={word[i]} selected={selected} />);
  }
  return (
    <Stack direction="row" spacing={0.8}>
      {boxes}
    </Stack>
  );
};

export default Word;
