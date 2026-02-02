window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    
    // Dumbbell Zoom Logic: Jaise scroll karoge, scale badhega
    let dumbbell = document.getElementById('db-anim');
    let scaleVal = 1 + (scrollPos / 500); // Har scroll pe bada hoga
    dumbbell.style.transform = scale(${scaleVal});

    // Cards Reveal Logic
    let cards = document.querySelectorAll('.info-card');
    cards.forEach(card => {
        let cardPos = card.getBoundingClientRect().top;
        if(cardPos < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
});
