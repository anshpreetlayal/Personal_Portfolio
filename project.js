// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current page in navigation bar
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('.')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
