import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CharBox = ({ char }) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        padding: "5px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: '2px',
        border: '1px solid black',
        borderRadius: '4px'
      }}
    >
      <Typography sx={{fontWeight: '600'}} variant="h4">{char || ''}</Typography>
    </Box>
  );
};

export default CharBox;
