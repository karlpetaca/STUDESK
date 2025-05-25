document.addEventListener('DOMContentLoaded', function() {
    const books = document.querySelectorAll('.book');
    const isMobile = window.innerWidth < 900; // Check if it's mobile view
    
    // Only apply mobile functionality if screen width is less than 900px
    if (isMobile) {
        books.forEach(book => {
            book.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                
                // If the clicked book was already active, remove active class
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    return;
                }
                
                // Remove active class from all books
                books.forEach(b => b.classList.remove('active'));
                // Make the clicked book active
                this.classList.add('active');
            });
        });

        // Close book when clicking anywhere on the document
        document.addEventListener('click', function(event) {
            // Check if the click was not on a book or its children
            if (!event.target.closest('.book')) {
                books.forEach(book => book.classList.remove('active'));
            }
        });
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        const isMobile = window.innerWidth < 900;
        if (!isMobile) {
            // Remove active class from all books when switching to desktop view
            books.forEach(book => book.classList.remove('active'));
        }
    });
}); 