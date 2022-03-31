import React, { useEffect } from "react";
//material-ui
import aboutStyles from "./aboutStyles";
import { Typography } from "@material-ui/core";
import Card from "./Card/Card";

function About ({ gsap }) {
	const classes = aboutStyles();

	useEffect(() => {
		gsap.from(".info", {
			scrollTrigger: {
				trigger: ".info",
				toggleActions: "restart none none reset",
			},
			duration: 0.6,
			opacity: 0,
			y: 50,
			ease: "power3.out",
			stagger: 0.1,
		});
		// eslint-disable-next-line
	}, []);

	return (
		<section className={classes.about} id="about">
			{/* <div className={classes.appBarSpacer} /> */}
			<div className={classes.info}>
				<div className="info">
					<Typography variant="h4">About Me</Typography>
				</div>
				<div className="info">
					<Typography gutterBottom variant="body1" className={classes.aboutMe}>
						"Hello, my name is Kenneth Ryan Dy a web developer. As I enjoy
						exploring new things I never back down from any challenges that
						comes. Seeking ideas and concepts are my favorite part of being a
						developer. I constantly learning to shrapen my skills that I already
						have."
					</Typography>
				</div>
			</div>
			<div className={classes.skills}>
				<Card gsap={gsap} />
			</div>
		</section>
	);
}

export default About;
