export const scrollTriggers = gsap => {
	//PROJECT !
	// gsap.from(".project-img1", {
	//   scrollTrigger: {
	//     trigger: ".link1",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%",
	//   },
	//   duration: 1.2,
	//   y: 1280,
	//   ease: "power3.out",
	// });
	gsap.from(".project-title1", {
		scrollTrigger: {
			trigger: ".link1",
			toggleActions: "restart none none reset",
			// start: "-50 100%",
		},
		duration: 1.2,
		x: 500,
		ease: "power3.out",
	});
	gsap.from(".project-body1", {
		scrollTrigger: {
			trigger: ".link1",
			toggleActions: "restart none none reset",
			// start: "-50 100%",
		},
		delay: 0.2,
		duration: 1,
		opacity: 0,
		ease: "power3.inOut",
	});
	gsap.from(".lists1", {
		scrollTrigger: {
			trigger: ".link1",
			toggleActions: "restart none none reset",
		},
		duration: 1.2,
		y: 24,
		ease: "power3.out",
		stagger: 0.1,
	});
	//PROJECT 2
	// gsap.from(".project-img2", {
	//   scrollTrigger: {
	//     trigger: ".link2",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%",
	//   },
	//   duration: 1.2,
	//   y: 1280,
	//   ease: "power3.out",
	// });
	gsap.from(".project-title2", {
		scrollTrigger: {
			trigger: ".link2",
			toggleActions: "restart none none reset",
			// start: "-50 100%",
		},
		duration: 1.2,
		x: -500,
		ease: "power3.out",
	});
	gsap.from(".project-body2", {
		scrollTrigger: {
			trigger: ".link2",
			toggleActions: "restart none none reset",
			// start: "-50 100%",
		},
		delay: 0.2,
		duration: 1,
		opacity: 0,
		ease: "power3.inOut",
	});
	gsap.from(".lists2", {
		scrollTrigger: {
			trigger: ".link2",
			toggleActions: "restart none none reset",
			// start: "-50 100%",
		},
		duration: 1.2,
		y: 24,
		ease: "power3.out",
		stagger: 0.1,
	});
	//PROJECT 3
	// gsap.from(".project-img3", {
	//   scrollTrigger: {
	//     trigger: ".link3",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%",
	//   },
	//   duration: 1.2,
	//   y: 1280,
	//   ease: "power3.out",
	// });
	// gsap.from(".project-title3", {
	//   scrollTrigger: {
	//     trigger: ".link3",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%",
	//   },
	//   duration: 1.2,
	//   x: 500,
	//   ease: "power3.out",
	// });
	// gsap.from(".project-body3", {
	//   scrollTrigger: {
	//     trigger: ".link3",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%",
	//   },
	//   duration: 1,
	//   opacity: 0,
	//   ease: "power3.inOut",
	//   delay: 0.2,
	// });
	// gsap.from(".lists3", {
	//   scrollTrigger: {
	//     trigger: ".link3",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%"
	//   },
	//   duration: 1.2,
	//   y: 24,
	//   ease: "power3.out",
	//   stagger: 0.1,
	// });
	// //PROJECT 4
	// gsap.from(".project-img4", {
	//   scrollTrigger: {
	//     trigger: ".link4",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%",
	//   },
	//   duration: 1.2,
	//   y: 1280,
	//   ease: "power3.out",
	// });
	// gsap.from(".project-title4", {
	//   scrollTrigger: {
	//     trigger: ".link4",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%"
	//   },
	//   duration: 1.2,
	//   x: -500,
	//   ease: "power3.out",
	// });
	// gsap.from(".project-body4", {
	//   scrollTrigger: {
	//     trigger: ".link4",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%"
	//   },
	//   duration: 1,
	//   opacity: 0,
	//   delay: 0.2,
	//   ease: "power3.inOut",
	// });
	// gsap.from(".lists4", {
	//   scrollTrigger: {
	//     trigger: ".link4",
	//     toggleActions: "restart none none reset",
	//     // start: "-50 100%"
	//   },
	//   duration: 1.2,
	//   y: 24,
	//   ease: "power3.out",
	//   stagger: 0.1,
	// });
}