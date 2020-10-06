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
    flex: 1,
    margin: `0 ${theme.spacing(2)}px`,
    "& img": {
      width: "100%",
    },
  },
  projectInfo: {
    flex: 1,
    alignSelf: "flex-start",
    margin: `0 ${theme.spacing(2)}px`,
  },
}));
