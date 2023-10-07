import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CharBox = ({ char, selected }) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2px",
        border: selected ? "1.5px solid black" : "1px solid #2b2b2a",
        borderRadius: "4px",
      }}
    >
      <Typography
        sx={{ fontWeight: "600", color: selected ? "black" : "#2b2b2a" }}
        variant="h4"
      >
        {char || ""}
      </Typography>
    </Box>
  );
};

export default CharBox;
