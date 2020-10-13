import { makeStyles } from "@material-ui/core/styles";
import img from "../../assets/laptop8.jpg";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  home: {
    color: "#e0e0e0",
    "&::after": {
      content: '""',
      position: "absolute",
      zIndex: 1,
      bottom: "0",
      borderRadius: 4,
      width: "100%",
      height: "10%",
      backgroundColor: "rgba(21,21,21,0)",
      backgroundImage: "-webkit-linear-gradient(top,rgba(21,21,21,0),#151515)",
    },
    height: "100vh",
    background: `url(${img}) no-repeat center center`,
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    backgroundSize: "cover",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderBottomRightRadius: 4,
    borderLeftRightRadius: 4,
  },
  container: {
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3),
  },
  introduction: {
    lineHeight: "2.5rem",
    "& .content-line": {
      margin: 0,
      height: 50,
      overflow: "hidden",
      position: "relative",
      [theme.breakpoints.only("xs")]: { height: 26 },
      [theme.breakpoints.only("sm")]: { height: 40 },
    },
    "& p": {
      fontSize: "1.46rem",
      letterSpacing: ".2rem",
      textAlign: "justify",
      [theme.breakpoints.only("xl")]: {
        fontSize: "2.6rem",
        letterSpacing: ".45rem",
      },
      [theme.breakpoints.down("md")]: { fontSize: "1.06rem" },
      [theme.breakpoints.only("xs")]: {
        fontSize: ".7rem !important",
        letterSpacing: ".12rem",
      },
      "& .intro": {
        position: "absolute",
        bottom: -6,
        [theme.breakpoints.only("xs")]: { bottom: 0 },
      },
    },
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Montserrat !important",
    fontWeight: "900 !important",
    lineHeight: "3rem",
    [theme.breakpoints.only("xl")]: { fontSize: "6rem !important" },
    [theme.breakpoints.only("lg")]: { fontSize: "3.2rem !important" },
    [theme.breakpoints.down("md")]: { fontSize: "2.5rem !important" },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.6rem !important",
    },
    textShadow:
      "0px 2px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.14), 0px 1px 3px rgba(0,0,0,0.12);",
  },
  btnRoot: {
    padding: "6px 16px !important",
    [theme.breakpoints.down("sm")]: { padding: "3px 9px !important" },
  },
  btns: {
    display: "flex",
    [theme.breakpoints.down("xs")]: { fontSize: ".7rem !important" },
  },
  btnResume: {
    marginRight: `${theme.spacing(2)}px !important`,
    border: "1px solid #ffffff !important",
    [theme.breakpoints.down("xs")]: { fontSize: ".7rem !important" },
    "&:hover": { textDecoration: "underline !important", color: "#e0e0e0" },
  },
  btnProject: {
    color: "#e0e0e0 !important",
    border: "1px solid #ffffff !important",
    "&:hover": {
      textDecoration: "underline !important",
      color: "#000000 !important",
    },
  },
  icons: {
    margin: `${theme.spacing(2)}px 0`,
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      margin: `${theme.spacing(1)}px 0`,
      width: "35%",
    },
    "& button": {
      padding: 0,
      transition: `transform 200ms ${theme.transitions.easing.easeInOut}`,
    },
    "& button:hover": { transform: "scale(1.2)" },
  },
}));
