gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

// 1. Horizontal Scroll Logic
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
});

// 2. Dumbbell Movement Timeline
let dbTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-container",
        scrub: 1,
        start: "top top",
        end: "bottom bottom"
    }
});

dbTL.to("#db", { 
    rotation: 360, 
    x: "-25vw", // Circle pe jayega
    scale: 0.5,
    duration: 1 
})
.to("#db", { 
    rotation: 720, 
    x: "20vw", // Details box ki taraf
    y: "-20vh",
    scale: 0.8,
    duration: 1 
});
