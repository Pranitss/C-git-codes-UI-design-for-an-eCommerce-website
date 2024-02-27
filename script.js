document.addEventListener("DOMContentLoaded", function() {
    // Fetch product data from server
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Render products
        renderProducts(data);
    })
    .catch(error => console.error('Error fetching products:', error));
});

function renderProducts(products) {
    const productList = document.getElementById('product-listing');
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}
