gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

// 1. Horizontal Scroll
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-wrapper",
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
});

// 2. Dumbbell Magic
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-wrapper",
        scrub: 1,
        start: "top top",
        end: "bottom bottom"
    }
});

tl.to("#db-pro", { rotation: 180, x: "-20vw", scale: 0.6, duration: 1 })
  .to("#db-pro", { rotation: 360, x: "20vw", y: "-10vh", scale: 0.8, duration: 1 });
