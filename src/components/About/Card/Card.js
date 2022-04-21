import React, { useEffect } from "react";
//material-ui
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		justifyContent: "space-evenly",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		gridRowGap: theme.spacing(2),
	},
	item: {
		"& i": {
			fontSize: "2.3rem",
		},
	},
	title: {
		textAlign: "center",
	},
	skills: {
		margin: theme.spacing(2),
	},
	skill: {
		opacity: 0,
	},
	paper: {
		opacity: 0,
		transform: "translateY(20px)",
		padding: 1,
		textAlign: "center",
		margin: theme.spacing(2),
		minHeight: 260,
		display: "flex",
		flexDirection: "column",
		height: "100%",

		"& i": {
			margin: `${theme.spacing(2)}px auto`,
			color: "#14213d",
		},
	},
	hr: {
		backgroundColor: "#14213d",
		width: "40%",
		alignSelf: "center",
		marginBottom: theme.spacing(1),
	},
}));

function Card ({ gsap }) {
	const classes = useStyles();

	useEffect(() => {
		gsap.to(".box", {
			scrollTrigger: {
				trigger: ".box",
				toggleActions: "restart none none reset",
			},
			duration: 0.4,
			opacity: 1,
			ease: "power3.in",
			y: 0,
			stagger: 0.1,
			delay: -0.8,
		});
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Typography gutterBottom variant="h5" className={`${classes.skill} box`}>
				Skills & Tools
			</Typography>
			<Grid container className={classes.container}>
				<Grid md={4} sm={6} xs={12} item className={classes.item}>
					<Paper className={`${classes.paper} box`}>
						<i className="fas fa-laptop-code" />
						<Typography className={classes.title} variant="h6">
							Front-end
						</Typography>
						<Divider className={classes.hr} variant="middle" />
						<Typography className={classes.skills} variant="body1">
							HTML5, CSS/SASS/JSS/LESS, Javascript, Jquery, Ajax
						</Typography>
						<Typography className={classes.title} variant="subtitle2">
							Frameworks
						</Typography>
						<Typography className={classes.skills} variant="body1">
							REACT/NEXT, REDUX, VUE, LARAVEL
						</Typography>
					</Paper>
				</Grid>
				<Grid md={4} sm={6} xs={12} item className={classes.item}>
					<Paper className={`${classes.paper} box`}>
						<i className="fas fa-database" />
						<Typography className={classes.title} variant="h6">
							Back-end
						</Typography>
						<Divider className={classes.hr} variant="middle" />
						<Typography className={classes.skills} variant="body1">
							PHP, NodeJs, Express, Graphql, REST, Java, Google API's
						</Typography>
						<Typography className={classes.title} variant="subtitle2">
							Database
						</Typography>
						<Typography className={classes.skills} variant="body1">
							MongoDB, Firebase, SQL
						</Typography>
					</Paper>
				</Grid>
				<Grid md={4} sm={12} xs={12} item className={classes.item}>
					<Paper className={`${classes.paper} box`}>
						<i className="fas fa-cogs" />
						<Typography className={classes.title} variant="h6">
							Others
						</Typography>
						<Divider className={classes.hr} variant="middle" />
						<Typography className={classes.skills} variant="body1">
							Wordpress, NPM, PIP, Git/Github, CLI, VS Code,
						</Typography>
						<Typography className={classes.title} variant="subtitle2">
							Design
						</Typography>
						<Typography className={classes.skills} variant="body1">
							Adobe Photoshop, Adobe Illustrator, COREL Draw,
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}

export default Card;

/* <Grid container className={classes.container}>
			<Grid item className={classes.item}>
				<Paper className={classes.paper}>
					<i className="fas fa-laptop-code" />
					<Typography variant="h6">Front-end</Typography>
					<List className={classes.lists}>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-html5"></i>
							</ListItemIcon>
							<ListItemText primary="HTML5" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-css3"></i>
							</ListItemIcon>
							<ListItemText primary="CSS3/SASS/JSS" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-js-square"></i>
							</ListItemIcon>
							<ListItemText primary="Javascript" />
						</ListItem>
						<ListItem>
							<ListItemText secondary="- Frameworks" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-react" />
							</ListItemIcon>
							<ListItemText primary="REACT" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-vuejs"></i>
							</ListItemIcon>
							<ListItemText primary="VUE" />
						</ListItem>
					</List>
				</Paper>
			</Grid>
			<Grid item className={classes.item}>
				<Paper className={classes.paper}>
					<i className="fas fa-database" />
					<Typography variant="h6">Back-end</Typography>
					<List className={classes.lists}>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-php"></i>
							</ListItemIcon>
							<ListItemText primary="PHP" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-node"></i>
							</ListItemIcon>
							<ListItemText primary="Node Js" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-java"></i>
							</ListItemIcon>
							<ListItemText primary="Java" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-python"></i>
							</ListItemIcon>
							<ListItemText primary="Python" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<i className="fab fa-node-js"></i>
							</ListItemIcon>
							<ListItemText primary="Express Js" />
						</ListItem>
						<ListItem>
							<ListItemText secondary="- Database" />
						</ListItem>
						<ListItem>
							<ListItemText primary="MongoDB" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Firebase" />
						</ListItem>
						<ListItem>
							<ListItemText primary="SQL" />
						</ListItem>
					</List>
				</Paper>
			</Grid>
			<Grid item className={classes.item}>
				<Paper className={classes.paper}>
					<i className="fas fa-cogs" />
					<Typography variant="h6">Others</Typography>
					<List className={classes.lists}>
						<ListItem>
							<ListItemText primary="Git/Github" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Bootstrap" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Material-ui" />
						</ListItem>
						<ListItem>
							<ListItemText secondary="Tools" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Visual Studio Code" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Adobe Photoshop" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Adobo Illustrator" />
						</ListItem>
					</List>
				</Paper>
			</Grid>
		</Grid> */
