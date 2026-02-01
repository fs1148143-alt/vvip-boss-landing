gsap.registerPlugin(ScrollTrigger);

// Initial Entry
gsap.from(".reveal-text", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out"
});

// Scroll animations for other elements
gsap.utils.toArray(".reveal").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});
