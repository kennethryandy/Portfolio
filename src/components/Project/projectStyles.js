import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  project: {
    height: "100%",
    color: "black",
    width: "90%",
    margin: "auto",
  },
  projectItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "3rem auto",
    padding: theme.spacing(3),
    color: "black",
  },
  imgContainer: {
    flex: 1.3,
    margin: `0 ${theme.spacing(2)}px`,
    position: "relative",
    "& a": {
      overflow: "hidden",
      display: "block",
    },
    "&:hover:after": {
      content: '""',
      transition: "all,ease-in-out .2s",
      position: "absolute",
      cursor: "pointer",
      top: 0,
      zIndex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(21,21,21,0)",
      borderRadius: 4,
      backgroundImage:
        "-webkit-linear-gradient(180deg,rgba(21,21,21,0),#14213d), -webkit-linear-gradient(360deg,rgba(21,21,21,0),#14213d)",
    },
    "&:hover img": { transform: "scale(1.1)" },
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      borderRadius: 4,
      transition: `transform 200ms ${theme.transitions.easing.easeInOut}`,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    [theme.breakpoints.only("xs")]: { display: "none" },
  },
  projectInfo: {
    flex: 1,
    alignSelf: "flex-start",
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.only("xs")]: { margin: `0 ${theme.spacing(4)}px` },
  },
  infoText: {
    "& h5": { fontSize: "1.8rem" },
    "& ul": { margin: 0, marginBottom: theme.spacing(1) },
  },
  projectButtons: {
    display: "flex",
  },
  code: {
    "&:hover": {
      color: "#0276aa",
    },
    color: "#03a9f4",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1rem",
  },
  demo: {
    borderRadius: "999px",
    marginRight: theme.spacing(1),
    [theme.breakpoints.only("sm")]: { fontSize: 10 },
  },
  hr: {
    backgroundColor: "#14213d",
    width: 360,
    marginBottom: theme.spacing(1),
  },
  imgLink: {
    position: "absolute",
    bottom: "50%",
    left: "30%",
    zIndex: 99,
    color: "#4dabf5",
    "& a": {
      display: "flex",
      border: "none",
      color: "#4dabf5",
      fontSize: "1rem",
    },
  },
}));
