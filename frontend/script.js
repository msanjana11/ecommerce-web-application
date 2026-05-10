// const productContainer = document.getElementById("product-container");


// // FETCH PRODUCTS
// async function fetchProducts() {

//     try {

//         const response = await fetch("http://localhost:5000/api/products");

//         const products = await response.json();

//         displayProducts(products);

//     } catch (error) {

//         console.log(error);

//     }

// }


// // DISPLAY PRODUCTS
// function displayProducts(products) {

//     productContainer.innerHTML = "";

//     products.forEach((product) => {

//         const card = document.createElement("div");

//         card.classList.add("product-card");

//         card.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">

//             <h3>${product.name}</h3>

//             <p>₹${product.price}</p>

//             <p>${product.description}</p>

//             <button onclick="addToCart('${product.name}', ${product.price})">
//                 Add to Cart
//             </button>
//         `;

//         productContainer.appendChild(card);

//     });

// }


// // ADD TO CART
// function addToCart(name, price) {

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     cart.push({ name, price });

//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert("Product added to cart");

// }


// fetchProducts();
const productContainer = document.getElementById("product-container");

// 🌐 Backend API URL (Render)
const API_URL = "https://ecommerce-web-application-ke5f.onrender.com";


// FETCH PRODUCTS
async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        displayProducts(products);

    } catch (error) {
        console.error("Error fetching products:", error);
        productContainer.innerHTML = "<p>Failed to load products.</p>";
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

            <button onclick="addToCart('${product._id}', '${product.name}', ${product.price})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);
    });
}


// ADD TO CART
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // check if product already exists
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");
}


// INIT
fetchProducts();