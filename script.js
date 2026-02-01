// Jab user scroll karega tab cards aur video dheere se dikhenge
window.addEventListener('scroll', reveal);

function reveal() {
    // Hum un saari cheezon ko pakdenge jinhe animate karna hai
    var reveals = document.querySelectorAll('.card, .video-wrapper, .ss-box');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Kitna scroll karne par dikhe

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Page load hote hi ek baar check karein
reveal();
