import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const theme = createMuiTheme({
  type: "dark",
  palette: {
    background: {
      default: "#e9ebee",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#1d2129",
    },
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      '"Roboto"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
