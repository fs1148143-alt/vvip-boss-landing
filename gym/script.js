// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Dumbbell Scroll & Zoom Animation
gsap.to("#db-img", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1 // Smooth scroll follow
    },
    y: 500,        // Niche move hoga
    scale: 2,      // Bada (Zoom) hoga
    rotate: 45     // Thoda ghumega
});

// 2. Text Reveal Animation
gsap.utils.toArray(".reveal-box").forEach(box => {
    gsap.to(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out"
    });
});
