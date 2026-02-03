gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero-img", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    rotation: 360,
    scale: 0.7
});
