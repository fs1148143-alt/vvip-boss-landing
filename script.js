let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slides img').length;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    slider.style.transform = translateX(-${currentSlide * 100}%);
}

// Har 3 second mein ek image slide hogi
setInterval(nextSlide, 3000);
