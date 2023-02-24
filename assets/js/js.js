const h2 = document.querySelectorAll('.faq h2');
h2.forEach(h => {
    h.addEventListener('click', () => {
        let parentEl = h.parentElement;
        parentEl.classList.toggle('expanded');

    })
})