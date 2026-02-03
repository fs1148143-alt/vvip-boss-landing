gsap.registerPlugin(ScrollTrigger);

// Dumbbell movement logic
gsap.to("#moving-db", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: 1, // Smooth scrolling
    },
    // Target circle ki location pe bhejna
    y: "125vh", 
    scale: 0.4, 
    rotate: 360,
    ease: "power1.inOut"
});

// Circles reveal animation
gsap.from(".circle", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
});
