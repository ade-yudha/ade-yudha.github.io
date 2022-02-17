
gsap.registerPlugin(ScrollTrigger);


if ($(window).width() >= 1400) {
	//start
	gsap.from(".nav-link", {opacity:0, duration: .3, y:-40, stagger: 0.1});
	gsap.from(".sosmed-icon", {opacity:0, duration: .5, y:30, stagger: 0.2});
	gsap.from(".feat-item p", {opacity:0, duration: 1.5, y:50, stagger: 0.3});



	//quizmodel
	gsap.from(".playon", {
		scrollTrigger: {
			trigger: ".quizmodel",
			start: "top 0px",
			end:"+=800",
			//markers:{startColor: "red", endColor: "red", indent:100, fontSize:"12px"},
			pin:false
		},
		scale:1.5,
		duration:2,
		ease:"none"
	});

	//tokenomics
	gsap.from(".tokenomics-header", {
		scrollTrigger: {
			trigger: ".tokenomics",
			start: "top 0px",
			end:"+=800",
			//markers:{startColor: "yellow", endColor: "yellow", indent:200, fontSize:"12px"},
			pin:false
		},
		opacity:0,
		x:50,
		duration:1,
		ease:"none"
	});

	gsap.from(".tokenomics-block-container", {
		scrollTrigger: {
			trigger: ".tokenomics",
			start: "top 0px",
			end:"+=800",
			//markers:{startColor: "green", endColor: "green", indent:300, fontSize:"12px"},
			pin:false
		},
		opacity:0,
		y:75,
		duration:1,
		stagger:0.3,
		ease:"none"
	});


	//tech
	let techtimeline = gsap.timeline({
		scrollTrigger:{
			trigger:".tech",
			start: "top -200px",
			end:"+=800",
			//markers:{startColor: "blue", endColor: "blue", indent:300, fontSize:"12px"},
			pin:false
		}
	})
	techtimeline
	.from(".tl2", { opacity:0, duration:.5, ease:"none"})
	.from(".tl1", { opacity:0, y:150, duration:2, ease:"power1"},0) 
	.fromTo(".tl3", { opacity:0, y:-150},{ opacity:1, y:0, duration:2, ease:"power1"},0)
	.from(".tech-info", { opacity:0, x:150, duration:2, ease:"power1"},0.5)


	//roadmap
	gsap.from(".roadmap-block-container", {
		scrollTrigger: {
			trigger: ".roadmap",
			start: "top 0px",
			end:"bottom 0px",
			//markers:{startColor: "purple", endColor: "purple", indent:400, fontSize:"12px"},
			pin:false
		},
		opacity:0,
		y:50,
		duration:.3,
		stagger:0.1,
		ease:"none"
	});


	//partners
	/*let partnerstimeline = gsap.timeline({
		scrollTrigger:{
			trigger:".partners",
			start:"top 200px",
			end:"+=450",
			scrub:false, 
			pin:false
		}
	})
	partnerstimeline
	.from(".partners-block", { opacity:0, y:100, duration:1, stagger:0.2, ease:"none"})*/


	//team
	let teamtimeline = gsap.timeline({
		scrollTrigger:{
			trigger:".team",
			start: "top 0px",
			end:"bottom 0px",
			//markers:{startColor: "orange", endColor: "orange", indent:500, fontSize:"12px"},
			pin:false
		}
	})
	teamtimeline
	.from(".teamtxt", { opacity:0, x:100, duration:1, ease:"none"})
	//.from(".teamblockimg", { opacity:0, x:-100, duration:1, ease:"none"},0.5)


	//faq
	let faqtimeline = gsap.timeline({
		scrollTrigger:{
			trigger:".faq",
			start: "top -200px",
			end:"bottom 0px",
			pin:false
		}
	})
	faqtimeline
	.from(".barry", { opacity:0, y:-200, yoyo:true, duration:1, ease:"bounce"})


	//tetra anim
	let tl = gsap.timeline({
		scrollTrigger:{
			trigger:".tetraside-container",
			start:"top 100px",
			end:"+=800",
			scrub:true, //scrub true is making animation follows the scrolling.
			//scrub:5,
			//markers:{startColor: "green", endColor: "green", indent:10, fontSize:"12px"},
			//once:true,
			//toggleActions: "play none none reverse", //this will make the anim reversable when scroll up
			pin:true
		}
	})


	tl
	.to("#tetra-left", { y:0, x:400, duration:1, ease:"none"},0)
	.to("#tetra-right", { y:0, x:-400, duration:1, ease:"none"},0)
	.to("#tetra-mid", { y:200, duration:1, ease:"none"},0)
	.to(".connecting", { opacity:0, duration:1, ease:"none"},0)
	.to(".line-container", { opacity:0, duration:0.5, ease:"none"},0)

	.to("#tetra-left", { opacity:0, duration:0, ease:"none"},1)
	.to("#tetra-right", { opacity:1, duration:0, ease:"none"},1)
	.to("#tetra-mid", { opacity:0, duration:0, ease:"none"},1)

	.to("#tetra-right", { opacity:0, duration:0, ease:"none"},1.5)
	.to(".polyhedron-container",{duration:0, opacity:1, ease:"none"},1.5)

	.to("#tetrahedron",{duration:2, rotateY:-200, ease:"none"})
	.to("#tetrahedron",{duration:0, opacity:0, ease:"none"})
	.to(".tetrastill", { opacity:1, x:30, y:4, duration:0, ease:"none"})
	.to(".tetrastill", { y:-200, ease:"none"})
	.fromTo(".quizcom-container", { opacity:0, y:0},{ opacity:1, y:20, duration:0.5, ease:"none"})

	//adding still duration
	.to(".tetrastill", { duration:2})

}

if ($(window).width() < 1400) {
    	

}


