import React from "react";
import { Typography } from "@mui/material";

import { Stack } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Typography sx={{ fontWeight: 700 }} variant="h4">
        Wordle
      </Typography>
    </Stack>
  );
};

export default Header;
