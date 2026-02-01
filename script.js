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

setInterval(slide, 3500);
