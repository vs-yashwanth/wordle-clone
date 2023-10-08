import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { colors } from "../../constants";
import BackSvg from "../../assets/backSvg";

const Keyboard = () => {
  const keyList = "QWERTYUIOPASDFGHJKLeZXCVBNMb";
  const keys = [];
  const handleClick = (key) => {
    let keyStroke;
    switch (key) {
      case "e":
        keyStroke = "Enter";
        break;
      case "b":
        keyStroke = "Backspace";
        break;
      default:
        keyStroke = key;
    }
    document.dispatchEvent(new KeyboardEvent("keyup", { key: keyStroke }));
  };
  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];

    let out;
    let spacing;
    let variant;
    let width;

    if (key === "e" || key === "b") {
      out = key === "e" ? "Enter" : "Backspace";
      variant = "caption";
      spacing = 3;
      width = "60px";
    } else {
      out = key;
      variant = "h6";
      spacing = 2;
      width = "40px";
    }

    keys.push(
      <Grid key={i} item sm={spacing} sx={{ padding: 0 }}>
        <Box
          style={{
            height: "55px",
            width: width,
            display: "flex",
            background: colors.keyUnused,
            borderRadius: "4px",
          }}
          justifyContent="center"
          alignItems="center"
          onClick={() => handleClick(key)}
        >
          {out === "Backspace" ? (
            <BackSvg />
          ) : (
            <Typography variant={variant} sx={{ fontWeight: 600 }}>
              {out}
            </Typography>
          )}
        </Box>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={1}
      columns={20}
      justifyContent="center"
      alignItems={"center"}
      sx={{ padding: "20px", maxWidth: "500px" }}
    >
      {keys}
    </Grid>
  );
};

export default Keyboard;
