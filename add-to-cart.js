document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const title = card.querySelector('.title').textContent.trim();
            const category = card.querySelector('.category').textContent.trim();
            const price = card.querySelector('.price').textContent.trim();
            const image = card.querySelector('img').getAttribute('src');

            const product = { title, category, price, image };

            // Get existing cart or create a new one
            let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Add new product
            cart.push(product);

            // Save back to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cart));

            // Redirect to cart page
            window.location.href = 'add-to-cart.html';
        });
    });
});

// nvm