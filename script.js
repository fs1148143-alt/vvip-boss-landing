document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const track = document.getElementById('slider');
    const totalSlides = 5;

    function moveSlider() {
        current++;
        if (current >= totalSlides) {
            current = 0;
        }
        // Smooth sliding logic
        track.style.transition = "transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)";
        track.style.transform = translateX(-${current * 20}%);
    }

    // Har 3 second mein photo change hogi
    setInterval(moveSlider, 3000);
});
