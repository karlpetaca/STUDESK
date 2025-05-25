document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.querySelector('input[type="range"]'); // Price range input
    const priceLabel = document.querySelector('.sidebar h3'); // Price range label

    const productCards = document.querySelectorAll('.product-card'); // All product cards

    // Function to filter products based on the selected price range
    function filterProductsByPrice() {
        const selectedPrice = parseInt(rangeInput.value);
        priceLabel.textContent = `Price range: ₱0 - ₱${selectedPrice}`; // Update the price range label

        // Loop through each product card and hide/show based on the price
        productCards.forEach(card => {
            const price = parseInt(card.querySelector('.price').textContent.replace('₱', '').replace(',', '')); // Get the product price
            
            if (price <= selectedPrice) {
                card.style.display = 'block'; // Show product
            } else {
                card.style.display = 'none'; // Hide product
            }
        });
    }

    // Initialize the filter when the page loads
    filterProductsByPrice();

    // Event listener for price range change
    rangeInput.addEventListener('input', filterProductsByPrice);
});