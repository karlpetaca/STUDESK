document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.product-card');

    products.forEach(card => {
        card.querySelector('img').addEventListener('click', () => {
            const title = card.querySelector('.title').textContent;
            const category = card.querySelector('.category').textContent;
            const price = card.querySelector('.price').textContent;
            const image = card.querySelector('img').getAttribute('src');

            const productData = {
                title,
                category,
                price,
                image
            };

            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            window.location.href = 'cart.html';
        });
    });
});