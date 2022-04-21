import covid19 from "../../assets/img/covid19.png";
import zmovies from "../../assets/img/zmovies.png";
import socialclone from "../../assets/img/socialclone.png";
import quizgame from "../../assets/img/quizgame.png";
import lets from '../../assets/img/lets.png';
import rooche from '../../assets/img/rooche.png';
import formStep from '../../assets/img/form-step.png';
import cnMentor from '../../assets/img/cnmentor.png';

const projects = [
	{
		title: "zMovies",
		img: zmovies,
		desc: "Browse your favorite movies and watch trailers it is a single page application that was built in React and React Router for easy and fast routing.. The goal of this project is to use dynamic components for efficiency and better performance.",
		link: "https://zmovies.netlify.app",
		srcCode: "https://github.com/kennethryandy/movie-app",
		tech: [
			"React",
			"Material-UI",
			"The Movie Database API"
		]
	},
	{
		title: "Covid-19 Tracker",
		img: covid19,
		desc: "An app that tracks coronavirus cases, recoveries and deaths world wide. It lets the user check covid19 cases in any country, it also has a map and graph on it.",
		link: "https://covid19-status-track.netlify.app",
		srcCode: "https://github.com/kennethryandy/Covid-19-Tracker",
		tech: [
			"React",
			"Material-UI",
			"Leaflet",
			"ChartJs",
			"Covid19 API",
			"Disease API"
		]
	},
	{
		title: "Social Clone",
		img: socialclone,
		desc: "A social social media app that let users post, like and comment. It has a RESTFUL API that is hosted in a separate server.",
		link: "https://socialclone.netlify.app",
		srcCode: "https://github.com/kennethryandy/Social-Clone",
		tech: [
			"React",
			"Material-UI",
			"Redux",
			"NodeJS",
			"Express",
			"Graphql",
			"MongoDB"
		]
	},
	{
		title: "Quiz Game",
		img: quizgame,
		desc: "A trivia game that lets the user select a category and difficulties that is pulled through the open trivia API. It then randomly selects ten random questions depending on the category that user's choose and tracks the correct answers.",
		link: "https://quiz-clone.netlify.app",
		srcCode: "https://github.com/kennethryandy/QuizGame",
		tech: [
			"React",
			"Material-UI",
			"Open Trivia API"
		]
	},
];

const works = [
	{
		title: "Lets",
		img: lets,
		desc: "Lets is a rising application that offers services to the consumers through deliveries and taking care of your errands.",
		link: "https://lets.com.ph",
		srcCode: false,
		tech: [
			"Wordpress",
			"React",
			"Bootstrap",
			"Google API's",
			"SASS"
		]
	},
	{
		title: "Rooche",
		img: rooche,
		desc: "Rooche use only the latest and the best in our mobile app, game and web development projects and in creating responsive web design for better user interface, user experience of your brand. We also integrate the best SEO practices to make it easier for your to rank on search engines. Rooche is an all-in-one IT solutions online!",
		link: "https://rooche.net/",
		srcCode: false,
		tech: [
			"Wordpress",
			"Reflex-grid",
			"Google API's",
			"SASS"
		]
	},
	{
		title: "Survey Form Projects",
		img: formStep,
		desc: "A hearing aid company that needs multiple desing for their product and service, using HTML, SASS, vanilla javascript our team builds multiple step form to collect the data of the survey form.",
		link: false,
		srcCode: "https://github.com/kennethryandy/form-step-projects",
		tech: [
			"HTML",
			"Reflex-grid",
			"SASS",
			"Vanilla javascript"
		]
	},
	{
		title: "Business Mentor UK",
		img: cnMentor,
		desc: "A website built for Christine Nicholson an award-winning Professional Business Mentor, author and speaker.",
		link: "https://www.businessmentoruk.com",
		srcCode: false,
		tech: [
			"Wordpress",
			"Reflex-grid",
			"SASS",
			"Vanilla javascript"
		]
	},
];

export {
	projects,
	works
};