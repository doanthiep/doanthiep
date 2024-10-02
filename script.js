let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ${item.price} VND`;
        cartItems.appendChild(div);
    });

    document.getElementById('total-price').textContent = totalPrice;
}
