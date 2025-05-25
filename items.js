document.addEventListener('DOMContentLoaded', () => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];

    const container = document.getElementById('cart-items');
    container.innerHTML = ''; // Clear existing

    items.forEach((item, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <div class="product-details">
                <p class="title">${item.title}</p>
                <p>${item.category}</p>
                <p>${item.price}</p>
                <p class="shipping">Ships within 2–4 days</p>
                <div class="quantity-control">
                    <button class="decrease">-</button>
                    <span class="quantity">1</span>
                    <button class="increase">+</button>
                </div>
                <div class="action-buttons">
                    <button class="remove">Remove</button>
                    <button class="wishlist">Move to Wishlist</button>
                </div>
            </div>
            <button class="buy-now">Place Order</button>
        `;
        container.appendChild(productDiv);

        const quantitySpan = productDiv.querySelector('.quantity');
        let quantity = 1;

        productDiv.querySelector('.increase').addEventListener('click', () => {
            quantity++;
            quantitySpan.textContent = quantity;
        });

        productDiv.querySelector('.decrease').addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });

        productDiv.querySelector('.remove').addEventListener('click', () => {
            items.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(items));
            location.reload();
        });

        // Move to Wishlist functionality
        productDiv.querySelector('.wishlist').addEventListener('click', () => {
            const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

            wishlistItems.push({
                title: item.title,
                category: item.category,
                price: item.price,
                image: item.image,
                quantity: quantity
            });

            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

            items.splice(index, 1); // Remove from cart
            localStorage.setItem('cartItems', JSON.stringify(items));

            window.location.href = 'wishlist.html';
        });

        productDiv.querySelector('.buy-now').addEventListener('click', () => {
            // Store the selected product with quantity in localStorage for use in the orders page
            const orderDetails = {
                title: item.title,
                category: item.category,
                price: item.price,
                quantity: quantity,
                image: item.image
            };
            localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        
            // Remove the item from the cart
            items.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(items));
        
            // Redirect to the orders page
            window.location.href = 'orders.html';
        });        
    });
});


// nvm