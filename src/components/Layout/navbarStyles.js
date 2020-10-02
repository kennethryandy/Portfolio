import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    [theme.breakpoints.between("md", "lg")]: { fontSize: "1.5rem " },
    fontWeight: "600 ",
  },
  navlink: {
    "&:hover": {
      color: "gray",
    },
    transition: `200ms all ${theme.transitions.easing.easeInOut}`,
    margin: "0 15px ",
    textDecoration: "none ",
    [theme.breakpoints.between("sm", "lg")]: { fontSize: "1rem" },
    [theme.breakpoints.only("xl")]: { fontSize: "1.5rem" },
    [theme.breakpoints.only("xs")]: { display: "none" },
  },
  navlinkScondary: {
    "&:hover": {
      color: "gray",
    },
    transition: `200ms all ${theme.transitions.easing.easeInOut}`,
    margin: "0 15px ",
    textDecoration: "none ",
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
}));
