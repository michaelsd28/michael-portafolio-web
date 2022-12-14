import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

// Importing the Bootstrap 5 CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
    typography:{
        allVariants:{
            color:"white"
        }
    },
  palette: {
  
    background: {
      paper: "#1b1f25", // your color
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
