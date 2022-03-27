import React, { useEffect } from "react";
//material-ui
import { Button, Divider, Link, Paper, Typography } from "@material-ui/core";
import projectStyles from "./projectStyles";
import CodeIcon from "@material-ui/icons/Code";
import { scrollTriggers } from "./scrollTriggers";
import { projects } from './projectData';

function Project ({ gsap }) {
	const classes = projectStyles();

	useEffect(() => {
		scrollTriggers(gsap);
		//eslint-disable-next-line
	}, []);

	return (
		<section className={classes.project} id="projects">
			<div className={classes.appBarSpacer} />
			<Typography variant="h4" className={classes.title} gutterBottom>
				My Latest Works.
			</Typography>
			<div className={classes.appBarSpacer} />
			<Typography variant="h4" className={classes.title} gutterBottom>
				Personal Projects
			</Typography>
			<Divider className={classes.hr} />
			{projects.map((project, i) => (
				<Paper className={classes.projectItem} elevation={2}>
					{i % 2 === 0 ? (
						<>
							<div className={classes.imgContainer}>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="link1"
								>
									<div className="project-img1">
										<img src={project.img} alt="zmovies" />
									</div>
								</a>
							</div>
							<div className={classes.projectInfo}>
								<div className={classes.infoText}>
									<Typography className="project-title1" variant="h5" gutterBottom>
										{project.title}
									</Typography>
									<Typography variant="body1" className="project-body1" gutterBottom>
										{project.desc}
									</Typography>
									<div className={classes.listItem}>
										<Typography className="lists1" variant="subtitle2">
											Built with
										</Typography>
									</div>
									<ul>
										{project.tech.forEach(tech => (
											<div className={classes.listItem}>
												<li className="lists1">{tech}</li>
											</div>
										))}
									</ul>
								</div>
								<div className={classes.projectButtons}>
									<Button
										href={project.link}
										color="primary"
										variant="contained"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.demo}
									>
										Live Demo
									</Button>
									<Link
										href={project.srcCode}
										target="_blank"
										rel="noopener noreferrer"
										className={classes.code}
									>
										<CodeIcon /> View Code
									</Link>
								</div>
							</div>
						</>
					) : (
						<>
							<div className={classes.projectInfo}>
								<div className={classes.infoText}>
									<Typography className="project-title1" variant="h5" gutterBottom>
										{project.title}
									</Typography>
									<Typography variant="body1" className="project-body1" gutterBottom>
										{project.desc}
									</Typography>
									<div className={classes.listItem}>
										<Typography className="lists1" variant="subtitle2">
											Built with
										</Typography>
									</div>
									<ul>
										{project.tech.forEach(tech => (
											<div className={classes.listItem}>
												<li className="lists1">{tech}</li>
											</div>
										))}
									</ul>
								</div>
								<div className={classes.projectButtons}>
									<Button
										href={project.link}
										color="primary"
										variant="contained"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.demo}
									>
										Live Demo
									</Button>
									<Link
										href={project.srcCode}
										target="_blank"
										rel="noopener noreferrer"
										className={classes.code}
									>
										<CodeIcon /> View Code
									</Link>
								</div>
							</div>
							<div className={classes.imgContainer}>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="link1"
								>
									<div className="project-img1">
										<img src={project.img} alt="zmovies" />
									</div>
								</a>
							</div>
						</>
					)}
				</Paper>
			))}
		</section>
	);
}

export default Project;
