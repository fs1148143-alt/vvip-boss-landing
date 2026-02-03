gsap.registerPlugin(ScrollTrigger);

// 1. Dumbbell Movement: Scroll pe ghumna aur thoda niche aana
gsap.to("#main-dumbbell", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1 // Ye hi makkhan scrolling ka raaz hai
    },
    rotation: 400,
    y: 300,
    scale: 1.2
});

// 2. Content Reveal: Ek-ek karke cards ka aana
gsap.utils.toArray(".reveal").forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 70%",
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});
