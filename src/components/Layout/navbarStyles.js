import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbar: {
    transition: `background-color 200ms ${theme.transitions.easing.easeInOut}`,
  },
  nav: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
  },
  title: {
    [theme.breakpoints.between("md", "lg")]: { fontSize: "1.5rem " },
    fontWeight: "600 ",
  },
  navlink: {
    "&:hover": {
      color: "#4dabf5",
    },
    transition: `200ms color ${theme.transitions.easing.easeInOut}`,
    margin: "0 15px ",
    textDecoration: "none ",
    [theme.breakpoints.between("sm", "lg")]: { fontSize: "1rem" },
    [theme.breakpoints.only("xl")]: { fontSize: "1.5rem" },
    [theme.breakpoints.only("xs")]: { display: "none" },
  },
  navlinkScondary: {
    "&:hover": {
      color: "#4dabf5",
    },
    transition: `200ms color ${theme.transitions.easing.easeInOut}`,
    margin: "0 15px ",
    textDecoration: "none ",
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
}));
