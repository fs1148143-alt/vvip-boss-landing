document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const track = document.getElementById('slider');
    setInterval(() => {
        current = (current + 1) % 5;
        track.style.transform = translateX(-${current * 20}%);
    }, 3500);
});
