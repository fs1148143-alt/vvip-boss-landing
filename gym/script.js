gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");

// 1. Nike Style Horizontal Scroll
gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
});

// 2. Aesthetic Asset Motion
gsap.to("#main-asset", {
    scrollTrigger: {
        trigger: ".scroll-container",
        scrub: 1.5,
        start: "top top",
        end: "bottom bottom"
    },
    y: "-=100",
    rotation: 45,
    scale: 1.2
});
