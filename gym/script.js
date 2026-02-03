gsap.registerPlugin(ScrollTrigger);

// 1. Text Reveal Animation
gsap.utils.toArray(".reveal").forEach((text) => {
    gsap.to(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out"
    });
});

// 2. Hero Image Floating Effect
gsap.to("#main-product", {
    y: 20,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
});

// 3. Scroll par Image Rotation
gsap.to("#main-product", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    rotation: 360,
    scale: 0.8
});
