document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const track = document.getElementById('slider');
    const totalSlides = 5;

    function nextSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        // Smooth sliding effect
        track.style.transform = translateX(-${index * 20}%);
    }

    // Har 3.5 second mein feedback automatically badlega
    setInterval(nextSlide, 3500);
});
