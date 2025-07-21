import { db } from './firebase.js';
import { collection, query, where, orderBy, limit, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

document.getElementById('fetchOrders').addEventListener('click', async () => {
  const phoneInput = document.getElementById('phoneInput').value.trim();
  if (!phoneInput) return alert('Enter phone number');
  const formattedPhone = phoneInput.startsWith('+91') ? phoneInput : '+91' + phoneInput;

  const q = query(
    collection(db, 'orders'),
    where('phone', '==', formattedPhone),
    orderBy('timestamp', 'desc'),
    limit(2)
  );
  const snapshot = await getDocs(q);
  const container = document.getElementById('orderHistory');
  container.innerHTML = '';

  if (snapshot.empty) {
    container.innerHTML = '<p>No recent orders found.</p>';
  } else {
    snapshot.forEach(doc => {
      const order = doc.data();
      container.innerHTML += `
        <h4>${order.name} - ${order.phone}</h4>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Total:</strong> ₹${order.total}</p>
        <p><strong>Status:</strong> ${order.paid ? 'Paid' : 'Unpaid'}</p>
        <ul>
          ${order.cart.map(i => `<li>${i.name} - ₹${i.price} x ${i.quantity}</li>`).join('')}
        </ul>
        <hr>
      `;
    });
  }
});

document.getElementById('placeNewOrderBtn').addEventListener('click', () => {
  localStorage.removeItem('cart');
  window.location.href = 'shop.html';
});
