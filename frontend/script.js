const productContainer = document.getElementById("product-container");

async function fetchProducts() {

    try {

        const response = await fetch("https://ecommerce-web-application-ke5f.onrender.com/products");

        const products = await response.json();

        displayProducts(products);

    } catch (error) {

        console.log(error);

    }

}

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

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");

}


