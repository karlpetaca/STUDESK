// No JavaScript needed for hover functionality 

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Handle click for mobile
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                menu.classList.toggle('active');
                toggle.classList.toggle('active');
            }
        });

        // Handle hover for desktop
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                menu.classList.add('active');
                toggle.classList.add('active');
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    });
    
    // Close dropdown when clicking outside (mobile only)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-menu').classList.remove('active');
                dropdown.querySelector('.dropdown-toggle').classList.remove('active');
            });
        }
    });
}); 