// 1. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// 2. Auto-Sliding Logic
const slider = document.getElementById('feedback-slider');
function autoScroll() {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
    } else {
        slider.scrollLeft += 1;
    }
}
let scrollInterval = setInterval(autoScroll, 20);

// Stop on touch
slider.addEventListener('touchstart', () => clearInterval(scrollInterval));
slider.addEventListener('touchend', () => scrollInterval = setInterval(autoScroll, 20));
