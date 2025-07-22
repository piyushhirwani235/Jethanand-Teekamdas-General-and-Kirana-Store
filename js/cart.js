import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cartItems');
  const totalAmountElement = document.getElementById('totalAmount');
  const orderForm = document.getElementById('orderForm');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, idx) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <p>
          <strong>${item.name}</strong> - ₹${item.price} x 
          <input type="number" min="1" value="${item.quantity}" data-index="${idx}" class="quantityInput" style="width: 50px;">
          = ₹${itemTotal}
          <button class="removeBtn" data-index="${idx}">Remove</button>
        </p>
        <hr>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    totalAmountElement.textContent = total;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Handle quantity change
  cartItemsContainer.addEventListener('input', (e) => {
    if (e.target.classList.contains('quantityInput')) {
      const index = e.target.dataset.index;
      const newQty = parseInt(e.target.value);
      if (newQty < 1) return alert("Quantity must be at least 1");
      cart[index].quantity = newQty;
      renderCart();
    }
  });

  // Handle remove item click
  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtn')) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      renderCart();
    }
  });

  // Handle clear cart click
  clearCartBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear the entire cart?")) {
      cart = [];
      renderCart();
    }
  });

  // Handle order form submission
  orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = '+91' + document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const paid = document.getElementById('paidCheckbox').checked;

    try {
      await addDoc(collection(db, 'orders'), {
        name,
        phone,
        address,
        paid,
        cart,
        total: totalAmountElement.textContent,
        timestamp: serverTimestamp()
      });
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      window.location.href = 'orders.html?phone=' + phone;
    } catch (err) {
      console.error(err);
      alert('Failed to place order. Try again.');
    }
  });

  continueShoppingBtn.addEventListener('click', () => {
    window.location.href = 'shop.html';
  });

  renderCart();
});
