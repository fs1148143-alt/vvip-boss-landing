window.onload = function() {
    const track = document.getElementById('slider');
    let current = 0;
    const totalSlides = 5; // Kyunki aapki 5 images hain

    function autoSlide() {
        current++;
        if (current >= totalSlides) {
            current = 0;
        }
        // Har slide 20% move hogi (100% / 5 images = 20%)
        track.style.transition = "transform 0.8s ease-in-out";
        track.style.transform = "translateX(-" + (current * 20) + "%)";
    }

    // Har 3 second (3000ms) mein slide badlega
    setInterval(autoSlide, 3000);
};
