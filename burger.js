document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navBar = document.querySelector('.nav-bar');
    const body = document.body;

    // Create backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    body.appendChild(backdrop);

    function toggleNav() {
        navBar.classList.toggle('active');
        backdrop.classList.toggle('active');
        body.style.overflow = navBar.classList.contains('active') ? 'hidden' : '';
    }

    navbarToggle.addEventListener('click', toggleNav);
    backdrop.addEventListener('click', toggleNav);

    // Close menu when clicking a link
    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navBar.classList.contains('active')) {
                toggleNav();
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navBar.classList.contains('active')) {
            toggleNav();
        }
    });
});