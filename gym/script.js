gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: 1,
        end: "+=2000"
    }
});

gsap.timeline({
    scrollTrigger: { trigger: ".wrapper", scrub: 1, start: "top top", end: "bottom bottom" }
})
.to("#db-pro", { rotation: 360, x: "-25vw", scale: 0.7 })
.to("#db-pro", { rotation: 720, x: "25vw", y: "-10vh", scale: 1 });
