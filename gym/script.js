gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

// 1. Horizontal Scroll Trigger
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-wrapper",
        pin: true,
        scrub: 1.5,
        end: "+=3500" // Scrolling smooth karne ke liye
    }
});

// 2. Dumbbell Journey (Hero -> Circle -> Card)
let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-wrapper",
        scrub: 1,
        start: "top top",
        end: "bottom bottom"
    }
});

timeline
.to("#db-pro", { 
    rotation: 180, 
    x: "-20vw", // Circle section mein move
    scale: 0.6,
    duration: 1 
})
.to("#db-pro", { 
    rotation: 360, 
    x: "22vw", // Last Info Card ke upar settle
    y: "-15vh",
    scale: 0.9,
    duration: 1 
});
