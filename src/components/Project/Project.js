import React, { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel2';
import { scrollTriggers } from "./scrollTriggers";
import { projects, works } from './projectData';
//material-ui
import { Button, Divider, Link, Paper, Typography } from "@material-ui/core";
import projectStyles from "./projectStyles";
import CodeIcon from "@material-ui/icons/Code";

function Project ({ gsap }) {
	const classes = projectStyles();

	const options = {
		items: 1,
		nav: true,
		rewind: true,
		autoplay: true,
		loop: true,
		nav: true,
		smartSpeed: 800
	};

	useEffect(() => {
		scrollTriggers(gsap);
		//eslint-disable-next-line
	}, []);

	return (
		<section className={classes.project} id="projects">
			<div className={classes.appBarSpacer} />
			<Typography variant="h4" className={classes.title} gutterBottom>
				Real World Projects.
			</Typography>
			<OwlCarousel options={options}>
				{works.map((work, i) => (
					<Paper className={classes.projectItem} elevation={2}>
						{i % 2 === 0 ? (
							<>
								<div className={classes.imgContainer}>
									<a
										href={work.link}
										target="_blank"
										rel="noopener noreferrer"
										className="link1"
									>
										<div className="project-img1">
											<img src={work.img} loading="lazy" alt={work.title ? work.title : ""} />
										</div>
									</a>
								</div>
								<div className={classes.projectInfo}>
									<div className={classes.infoText}>
										<Typography className="project-title1" variant="h5" gutterBottom>
											{work.title}
										</Typography>
										<Typography variant="body1" className="project-body1" gutterBottom>
											{work.desc}
										</Typography>
										<div className={classes.listItem}>
											<Typography className="lists1" variant="subtitle2">
												Built with
											</Typography>
										</div>
										<ul>
											{work.tech.map(tech => (
												<div className={classes.listItem}>
													<li className="lists1">{tech}</li>
												</div>
											))}
										</ul>
									</div>
									<div className={classes.projectButtons}>
										<Button
											href={work.link}
											color="primary"
											variant="contained"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.demo}
										>
											Live Demo
										</Button>
										<Link
											href={work.srcCode}
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
											{work.title}
										</Typography>
										<Typography variant="body1" className="project-body1" gutterBottom>
											{work.desc}
										</Typography>
										<div className={classes.listItem}>
											<Typography className="lists1" variant="subtitle2">
												Built with
											</Typography>
										</div>
										<ul>
											{work.tech.map(tech => (
												<div className={classes.listItem}>
													<li className="lists1">{tech}</li>
												</div>
											))}
										</ul>
									</div>
									<div className={classes.projectButtons}>
										<Button
											href={work.link}
											color="primary"
											variant="contained"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.demo}
										>
											Live Demo
										</Button>
										<Link
											href={work.srcCode}
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
										href={work.link}
										target="_blank"
										rel="noopener noreferrer"
										className="link1"
									>
										<div className="project-img1">
											<img src={work.img} loading="lazy" alt={work.title ? work.title : ""} />
										</div>
									</a>
								</div>
							</>
						)}
					</Paper>
				))}
			</OwlCarousel>
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
										<img src={project.img} loading="lazy" alt={project.title ? project.title : ""} />
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
										{project.tech.map(tech => (
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
										{project.tech.map(tech => (
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
										<img src={project.img} loading="lazy" alt={project.title ? project.title : ""} />
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
