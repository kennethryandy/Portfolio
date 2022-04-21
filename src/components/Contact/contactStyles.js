import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	contact: {
		backgroundColor: "#14213d",
		height: "100%",
		color: "#e0e0e0",
		minHeight: '85vh'
	},
	title: {
		textAlign: "center",
		fontWeight: 600
	},
	formContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "90%",
		margin: "auto",
	},
	form: {
		margin: `${theme.spacing(4)}px 0`,
		"& button": {
			margin: `${theme.spacing(1)}px 0`,
			width: "30%",
			[theme.breakpoints.down("sm")]: { width: "100%" },
		},
	},
	textField: {
		"& fieldset": {
			borderColor: "#FFF",
		},
		margin: `${theme.spacing(2)}px 0`,
		[theme.breakpoints.down('sm')]: {
			margin: `${theme.spacing(1)}px 0`
		},
		"& label": {
			color: "#e0e0e0",
		},
		"& input": {
			color: "#e0e0e0",
		},
		"& textarea": {
			color: "#e0e0e0",
		},
		"&:hover": {
			"& fieldset": {
				borderColor: "#ffffff !important"
			}
		}
	},
	dialogTitle: {
		"& h2": {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			"& svg": {
				cursor: "pointer"
			}
		}
	}
}));
