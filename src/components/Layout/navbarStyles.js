import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	navbar: {
		transition: `background-color 400ms ${theme.transitions.easing.easeInOut}`,
	},
	nav: {
		width: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		margin: "auto",
		transition: `300ms all ${theme.transitions.easing.easeInOut}`,
		"&.nav-expanded": {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2)
		}
	},
	title: {
		[theme.breakpoints.between("md", "lg")]: { fontSize: "1.5rem " },
		fontWeight: "600 ",
		display: "flex",
	},
	brandName: {
		width: 80,
		margin: 0,
		overflow: "hidden",
	},
	navlink: {
		"&:hover": {
			color: "#4dabf5",
		},
		transition: `200ms color ${theme.transitions.easing.easeInOut}`,
		margin: "0 15px !important",
		textDecoration: "none ",
		"&.hidden": {
			opacity: "0 !important",
			userSelect: "none",
			pointerEvents: "none"
		},
		[theme.breakpoints.between("sm", "lg")]: { fontSize: "1rem" },
		[theme.breakpoints.only("xl")]: { fontSize: "1.5rem" },
		[theme.breakpoints.only("xs")]: { display: "none" }
	},
	navIcon: {
		margin: "0",
		[theme.breakpoints.down("sm")]: { display: "none !important" },
	},
	navlinkScondary: {
		"&:hover": {
			color: "#4dabf5",
		},
		transition: `200ms color ${theme.transitions.easing.easeInOut}`,
		margin: "0 15px !important",
		textDecoration: "none ",
		[theme.breakpoints.up("sm")]: { display: "none !important" },
	},
}));
