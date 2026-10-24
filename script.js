const pages = document.querySelectorAll('.cover, .content');

const pageFlip = new Audio('imgs/flip.mp3');
pageFlip.volume = 1.0;

pages.forEach(page => {
    page.addEventListener('click', (e) => {
        e.stopPropagation();
        
        page.classList.toggle('flipped');

        if (page.matches('.cover:not(.flipped)')) {
            document.querySelectorAll('.content').forEach(c => c.classList.remove('flipped'));
            window.alert('The book is closing!')
        }
        pageFlip.currentTime = 0;
        pageFlip.play().catch(err => console.log("flip audio error:", err));
    });
});