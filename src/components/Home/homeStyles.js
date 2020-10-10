import { makeStyles } from "@material-ui/core/styles";
import img from "../../assets/laptop8.jpg";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  home: {
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
  },
  introduction: {
    width: 420,
    lineHeight: "2.5rem",
    "& p": {
      fontSize: "1.06rem",
      letterSpacing: ".2rem",
      textAlign: "justify",
      [theme.breakpoints.only("xs")]: {
        fontSize: ".7rem !important",
        letterSpacing: ".12rem",
      },
    },
  },
  name: {
    fontFamily: "Montserrat !important",
    fontWeight: "900 !important",
    lineHeight: "3rem",
    [theme.breakpoints.down("lg")]: { fontSize: "2.5rem !important" },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.6rem !important",
    },
    textShadow:
      "0px 2px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.14), 0px 1px 3px rgba(0,0,0,0.12);",
  },
  btns: {
    margin: `${theme.spacing(3)}px 0`,
    [theme.breakpoints.down("xs")]: { fontSize: ".7rem !important" },
    "& .MuiButton-containedSizeLarge": {
      padding: "7px 21px",
    },
  },
  btnResume: {
    marginRight: `${theme.spacing(4)}px !important`,
    border: "1px solid #ffffff !important",
    [theme.breakpoints.down("sm")]: {
      marginRight: `${theme.spacing(2)}px !important`,
    },
    [theme.breakpoints.down("xs")]: { fontSize: ".7rem !important" },
    "&:hover": { textDecoration: "underline !important" },
  },
  btnProject: {
    border: "1px solid #ffffff !important",
    "&:hover": { textDecoration: "underline !important" },
  },
  icons: {
    margin: `${theme.spacing(2)}px 0`,
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      margin: `${theme.spacing(1)}px 0`,
      width: "40%",
    },
    "& button": { padding: 0 },
    "& button:hover": { transform: "scale(1.1)" },
  },
}));
