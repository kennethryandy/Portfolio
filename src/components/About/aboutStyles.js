import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  about: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "90%",
  },
  info: {
    [theme.breakpoints.between("md", "lg")]: { width: "75%" },
    [theme.breakpoints.between("xs", "sm")]: { width: "85%" },
    width: "70%",
    "& h4": { textAlign: "center", margin: theme.spacing(2) },
    "& p": { textAlign: "justify", fontSize: "1.2rem" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skills: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));
