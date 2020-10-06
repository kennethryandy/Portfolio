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
    alignItems: "center",
    borderBottomRightRadius: 4,
    borderLeftRightRadius: 4,
  },
  name: {
    [theme.breakpoints.between("md", "lg")]: { fontSize: "4.4rem !important" },
    [theme.breakpoints.only("sm")]: {
      fontSize: "3.6rem !important",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.2rem !important",
    },
    fontWeight: "400 !important",
    textShadow:
      "0px 2px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.14), 0px 1px 3px rgba(0,0,0,0.12);",
  },
  intro: {
    margin: `${theme.spacing(2)}px auto`,
  },
  introText: {
    "& span": {
      [theme.breakpoints.only("xl")]: { fontSize: "3rem" },
      [theme.breakpoints.between("md", "lg")]: { fontSize: "2rem" },
      [theme.breakpoints.only("sm")]: { fontSize: "1.6rem" },
      textShadow:
        "0px 2px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.14), 0px 1px 3px rgba(0,0,0,0.12);",
    },
  },
  iconContainer: {
    width: "100%",
    textAlign: "-webkit-center",
    position: "absolute",
    bottom: 0,
    margin: "50px 0",
    [theme.breakpoints.only("xl")]: { margin: "120px 0" },
  },
  toggleIcon: {
    fontSize: "2.6rem !important",
    transform: "rotate(90deg)",
    zIndex: 3,
    color: "#4dabf5",
  },
  iconButton: {
    "-webkit-animation": "$bounce 3s infinite",
    animation: "$bounce 3s infinite",
    animationDelay: "2s",
  },
  "@keyframes bounce": {
    "0%, 20%, 40%, 80%, 100%": { transform: "translateY(0)" },
    "40%": { transform: "translateY(-12px);" },
    "60%": { transform: "translateY(0px);" },
  },
}));
