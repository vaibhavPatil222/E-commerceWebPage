

const products = [
    { Id: 1, name: "Running Shoes", price: 6000, image: "./Photo/add1.jpg" },
    { Id: 2, name: "Gyme/Gymnasium Shoes", price: 1000, image: "./Photo/add2.jpg" },
    { Id: 3, name: "Causual Shoes", price: 3000, image: "./Photo/add3.jpg" },
    { Id: 4, name: "TVS Rider 125", price: 2000, image: "./Photo/add4.webp" }
];

const showCarts = document.getElementById("showProduct");
const cart = []; 
products.forEach(product => {
    showCarts.innerHTML += `
        <div class="product">
             <img class="img" src="${product.image}" width="300px" height="200px">
            
            <h3>${product.name}</h3>
            <p>125 is India's first commuter bike </p>
            <i>&#8377 ${product.price.toFixed(2)}</i><br>
            <button class="btn" onclick="addToCart(${product.Id})">Add to cart</button>
        </div>`;
});

function addToCart(productId) {
    const product = products.find(p => p.Id === productId); 
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total"); 
  
    cartCount.textContent = cart.length;
    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(product => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div>
                <h3>${product.name}</h3>
                <p>Price: &#8377 ${product.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${product.Id})">Remove</button>
            
        `;
        cartItems.appendChild(cartItem);
        totalPrice += product.price;
    });

    cartTotal.textContent = totalPrice.toFixed(2);
}

const cartTotal = document.getElementById("cart-total");


window.removeFromCart = (productId)=>{
  const index = cart.findIndex(product => product.Id === productId);
  console.log(cart);
  if (index !== -1){
    cart.splice(index, 1)
    console.log(cart);
    updateCart();
  }
}
