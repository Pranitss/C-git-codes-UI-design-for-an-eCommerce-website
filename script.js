// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-listing');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to add items to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        const cart = document.getElementById('shopping-cart');
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
        `;
        cart.appendChild(cartItem);
    }
}

// Display products on page load
displayProducts();
