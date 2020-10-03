import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  contact: {
    backgroundColor: "#040411",
    height: "90vh",
  },
  title: {
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "60%",
    margin: "auto",
  },
  form: {
    "& button": {
      margin: `${theme.spacing(1)}px 0`,
      width: "30%",
      [theme.breakpoints.down("sm")]: { width: "100%" },
    },
  },
  textField: {
    "& fieldset": { borderColor: "#FFF" },
    margin: `${theme.spacing(1)}px 0`,
  },
}));
