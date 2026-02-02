document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const track = document.getElementById('slider');
    
    function slide() {
        current = (current + 1) % 5;
        track.style.transform = translateX(-${current * 20}%);
    }

    // Har 3.5 second mein slide change hogi
    setInterval(slide, 3500);
});
