// Add active class to the current navigation link
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = '#32FF7E'; // Highlight the current page
        }
    });
});
