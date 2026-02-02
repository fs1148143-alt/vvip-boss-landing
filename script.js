document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const track = document.getElementById('slider');
    const totalSlides = 5;

    function autoSlide() {
        current = (current + 1) % totalSlides;
        // 20% shift for 5 images (100 / 5 = 20)
        track.style.transform = translateX(-${current * 20}%);
    }

    // Har 3 second mein slide badlega
    setInterval(autoSlide, 3000);
});
