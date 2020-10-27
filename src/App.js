import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import gsap from "./gsap";
import Loading from "./components/Layout/Loading";

const typography = {
  fontFamily: [
    '"Poppins"',
    '"Montserrat"',
    '"Roboto"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    '"Oxygen"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

function App() {
  const [navBar, setNavBar] = useState(true);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  const theme = createMuiTheme({
    palette: {
      // primary: {
      //   light: "#434d63",
      //   main: "#14213d",
      //   dark: "#0e172a",
      //   contrastText: "#ffffff",
      // },
      secondary: {
        light: "#ffffff",
        main: "#ffffff",
        dark: "#b2b2b2",
        contrastText: "#040411",
      },
      background: {
        default: "#e5e5e5",
      },
      // text: {
      //   primary: "#e0e0e0",
      //   secondary: "#FFF",
      // },
    },
    typography,
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        light: "#272b31",
        main: "#393e46",
        dark: "#60646b",
        contrastText: "#fff",
      },
      secondary: {
        light: "#a6a6a6",
        main: "#eeeeee",
        dark: "#f1f1f1",
        contrastText: "#000",
      },
    },
    typography,
  });

  useEffect(() => {
    gsap.to(document.body, { duration: 0, css: { visibility: "visible" } });
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : theme}>
      <CssBaseline />
      {loading ? 
        <Loading/>
       : 
      (
        <>
        <Navbar navBar={navBar} gsap={gsap} dark={dark} setDark={setDark} />
        <Home nav={setNavBar} gsap={gsap}/>
        <About gsap={gsap} />
        <Project gsap={gsap} />
        <Contact gsap={gsap} />
        </>
      )
      }
    </ThemeProvider>
  );
}

export default App;
