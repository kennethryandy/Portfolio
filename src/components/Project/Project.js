import React, { useEffect, useRef } from "react";
import OwlCarousel from 'react-owl-carousel2';
import { scrollTriggers } from "./scrollTriggers";
import { projects, works } from './projectData';
//material-ui
import { Button, Divider, Link, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import projectStyles from "./projectStyles";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Project ({ gsap }) {
	const classes = projectStyles();
	const worksRef = useRef();
	const projectsRef = useRef();

	const options = {
		items: 1,
		rewind: true,
		autoplay: true,
		mouseDrag: false,
		touchDrag: false,
		loop: true,
		autoplayHoverPause: true,
		smartSpeed: 1400,
		margin: 80,
		autoplayTimeout: 3200,
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
			<Divider className={classes.hr} />
			<div className={classes.projectContainer}>
				<OwlCarousel ref={worksRef} options={options}>
					{works.map((work, i) => (
						<Paper key={i} className={classes.projectItem} elevation={2}>
							{i % 2 === 0 ? (
								<>
									<div className={classes.imgContainer}>
										<a
											href={work.link}
											target="_blank"
											rel="noopener noreferrer"
											className="link1"
										>
											<div className="" data-aos="fade-right" aos-duration="900">
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
													<div key={tech} className={classes.listItem}>
														<li className="lists1">{tech}</li>
													</div>
												))}
											</ul>
										</div>
										<div className={classes.projectButtons}>
											<Button
												href={work.link ? work.link : ""}
												startIcon={work.link ? <></> : <VisibilityOffIcon />}
												color="primary"
												variant="contained"
												target="_blank"
												rel="noopener noreferrer"
												className={classes.demo}
												disabled={!work.link}
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
													<div key={tech} className={classes.listItem}>
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
											<div data-aos="fade-left" aos-duration="900">
												<img src={work.img} loading="lazy" alt={work.title ? work.title : ""} />
											</div>
										</a>
									</div>
								</>
							)}
						</Paper>
					))}
				</OwlCarousel>
				<div className={classes.navIcons}>
					<Button onClick={() => worksRef.current.prev()} className={classes.navIconBtn}><ArrowBackIosOutlined className={classes.navIcon} /></Button>
					<Button onClick={() => worksRef.current.next()} className={classes.navIconBtn}><ArrowForwardIosOutlinedIcon className={classes.navIcon} /></Button>
				</div>
			</div>
			<div className={classes.appBarSpacer} />
			<Typography variant="h4" className={classes.title} gutterBottom>
				Personal Projects
			</Typography>
			<Divider className={classes.hr} />
			<div className={classes.projectContainer}>
				<OwlCarousel ref={projectsRef} options={{ ...options, autoplayTimeout: 3800 }}>
					{projects.map((project, i) => (
						<Paper key={i} className={classes.projectItem} elevation={2}>
							{i % 2 === 0 ? (
								<>
									<div className={classes.projectInfo}>
										<div className={classes.infoText}>
											<Typography className="project-title2" variant="h5" gutterBottom>
												{project.title}
											</Typography>
											<Typography variant="body1" className="project-body2" gutterBottom>
												{project.desc}
											</Typography>
											<div className={classes.listItem}>
												<Typography className="lists2" variant="subtitle2">
													Built with
												</Typography>
											</div>
											<ul className={classes.listItemContainer}>
												{project.tech.map(tech => (
													<div key={tech} className={classes.listItem}>
														<li className="lists2">{tech}</li>
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
											className="link2"
										>
											<div data-aos="fade-left" aos-duration="900">
												<img src={project.img} loading="lazy" alt={project.title ? project.title : ""} />
											</div>
										</a>
									</div>
								</>
							) : (
								<>
									<div className={classes.imgContainer}>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="link2"
										>
											<div data-aos="fade-right" aos-duration="900">
												<img src={project.img} loading="lazy" alt={project.title ? project.title : ""} />
											</div>
										</a>
									</div>
									<div className={classes.projectInfo}>
										<div className={classes.infoText}>
											<Typography className="project-title2" variant="h5" gutterBottom>
												{project.title}
											</Typography>
											<Typography variant="body1" className="project-body2" gutterBottom>
												{project.desc}
											</Typography>
											<div className={classes.listItem}>
												<Typography className="lists2" variant="subtitle2">
													Built with
												</Typography>
											</div>
											<ul>
												{project.tech.map(tech => (
													<div key={tech} className={classes.listItem}>
														<li className="lists2">{tech}</li>
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
							)}
						</Paper>
					))}
				</OwlCarousel>
				<div className={classes.navIcons}>
					<Button onClick={() => projectsRef.current.prev()} className={classes.navIconBtn}><ArrowBackIosOutlined className={classes.navIcon} /></Button>
					<Button onClick={() => projectsRef.current.next()} className={classes.navIconBtn}><ArrowForwardIosOutlinedIcon className={classes.navIcon} /></Button>
				</div>
			</div>
		</section>
	);
}

export default Project;