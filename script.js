let current = 0;
const track = document.getElementById('slider');
const total = 5;

function slide() {
    current++;
    if (current >= total) {
        current = 0;
    }
    track.style.transform = translateX(-${current * 20}%);
}

// Har 3.5 second mein feedback badlega
setInterval(slide, 3500);
