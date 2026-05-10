const productContainer = document.getElementById("product-container");


// FETCH PRODUCTS
async function fetchProducts() {

    try {

        const response = await fetch("http://localhost:5000/api/products");

        const products = await response.json();

        displayProducts(products);

    } catch (error) {

        console.log(error);

    }

}


// DISPLAY PRODUCTS
function displayProducts(products) {

    productContainer.innerHTML = "";

    products.forEach((product) => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <p>${product.description}</p>

            <button onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);

    });

}


// ADD TO CART
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");

}


fetchProducts();