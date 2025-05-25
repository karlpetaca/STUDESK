document.getElementById('sort').addEventListener('change', function () {
    const sortValue = this.value;
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(productGrid.querySelectorAll('.product-card'));

    // Helper to extract the numeric price
    function getPrice(productCard) {
        const priceText = productCard.querySelector('.price').textContent;
        return parseFloat(priceText.replace('₱', '').replace(',', ''));
    }

    // Sort products
    if (sortValue === 'price-low') {
        products.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortValue === 'price-high') {
        products.sort((a, b) => getPrice(b) - getPrice(a));
    } else {
        // Optional: reset to original order or leave as-is
        return;
    }

    // Remove and re-append sorted products
    productGrid.innerHTML = '';
    products.forEach(product => productGrid.appendChild(product));
});

