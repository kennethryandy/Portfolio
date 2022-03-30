import {
	makeStyles
} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	project: {
		height: "100%",
		width: "90%",
		margin: "auto",
	},
	projectItem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "5rem auto",
		padding: theme.spacing(3),
		overflow: "hidden",
		cursor: "grab",
		[theme.breakpoints.down("md")]: {
			margin: "3rem auto"
		},
	},
	imgContainer: {
		flex: 1.3,
		margin: `0 ${theme.spacing(2)}px`,
		position: "relative",
		"& a": {
			overflow: "hidden",
			display: "block",
			"&:hover:after": {
				content: '""',
				transition: "all,ease-in-out .2s",
				position: "absolute",
				cursor: "pointer",
				top: 0,
				zIndex: 1,
				width: "100%",
				height: "100%",
				borderRadius: 4,
				background: "#151515",
				opacity: ".2",
			},
		},

		"&:hover img": {
			transform: "scale(1.1)"
		},
		"& img": {
			width: "100%",
			height: "auto",
			objectFit: "cover",
			borderRadius: 4,
			transition: `transform 200ms ${theme.transitions.easing.easeInOut}`,
			boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
			maxHeight: 440
		},
		[theme.breakpoints.only("xs")]: {
			display: "none"
		},
	},
	projectInfo: {
		flex: 1,
		alignSelf: "flex-start",
		margin: `0 ${theme.spacing(2)}px`,
		[theme.breakpoints.only("xs")]: {
			margin: `0 ${theme.spacing(4)}px`
		},
	},
	infoText: {
		overflow: "hidden",
		"& h5": {
			fontSize: "1.8rem"
		},
		"& ul": {
			margin: 0,
			marginBottom: theme.spacing(1)
		},
		"& p": {
			textAlign: "justify"
		},
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
		[theme.breakpoints.down("sm")]: {
			fontSize: 12
		},
	},
	demo: {
		borderRadius: "999px",
		marginRight: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			fontSize: 12
		},
	},
	hr: {
		backgroundColor: "#14213d",
		width: 360,
		marginBottom: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			width: 240
		},
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
	listItem: {
		height: 24,
		overflow: "hidden",
	},
}));