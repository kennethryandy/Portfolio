import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  about: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    margin: "auto",
  },
  info: {
    [theme.breakpoints.between("md", "lg")]: { width: "75%" },
    [theme.breakpoints.between("xs", "sm")]: { width: "85%" },
    width: "70%",
    "& h4": { textAlign: "center" },
    "& p": { textAlign: "justify" },
  },
}));
