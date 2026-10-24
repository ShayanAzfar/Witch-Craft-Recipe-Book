const pages = document.querySelectorAll('.cover, .content');

pages.forEach(page => {
    page.addEventListener('click', (e) => {
        e.stopPropagation();
        page.classList.toggle('flipped');

        if (page.matches('.cover:not(.flipped)')) {
            document.querySelectorAll('.content').forEach(c => c.classList.remove('flipped'));
        }
    });
});