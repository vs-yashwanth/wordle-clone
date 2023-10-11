import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const getTheme = (prefersDarkMode) => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "#099409",
        light: "#099409",
        contrastText: "#fff",
      },
      warning: {
        main: "#cdcd27",
        light: "#cdcd27",
        contrastText: "#fff",
      },
      error: {
        main: "#655c5c",
        light: "#655c5c",
        contrastText: "#fff",
      },
      text: {
        primary: "#000",
        secondary: "#fff",
      },
      border: {
        main: "#d3d6da",
        full: "#3f3838",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      success: {
        main: "#099409",
        light: "#099409",
        contrastText: "#fff",
      },
      warning: {
        main: "#cdcd27",
        light: "#cdcd27",
        contrastText: "#fff",
      },
      error: {
        main: "#655c5c",
        light: "#655c5c",
        contrastText: "#fff",
      },
      text: {
        primary: "#fff",
        secondary: "#fff",
      },
      border: {
        full: "#d3d6da",
        main: "#3f3838",
      },
    },
  });

  return responsiveFontSizes(prefersDarkMode ? darkTheme : lightTheme);
};

export default getTheme;
