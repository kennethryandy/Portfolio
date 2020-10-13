import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  contact: {
    backgroundColor: "#14213d",
    height: "90vh",
    color: "#e0e0e0",
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
    "& label": {
      color: "#e0e0e0",
    },
    "& input": {
      color: "#e0e0e0",
    },
  },
}));
