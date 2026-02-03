gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
});

gsap.to("#db-pro", {
    scrollTrigger: { trigger: ".wrapper", scrub: 1, start: "top top", end: "bottom bottom" },
    rotation: 360,
    x: "20vw",
    scale: 0.8
});
