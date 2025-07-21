import { db } from './firebase.js';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', async () => {
  const ordersContainer = document.getElementById('adminOrders');

  try {
    const q = query(collection(db, 'orders'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    ordersContainer.innerHTML = '';

    if (snapshot.empty) {
      ordersContainer.innerHTML = '<p>No orders found.</p>';
    } else {
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        const id = docSnap.id;
        const total = data.cart
          ? data.cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
          : 0;

        const div = document.createElement('div');
        div.classList.add('order-block');
        div.innerHTML = `
          <h3>${data.name} (${data.phone})</h3>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Status:</strong> ${data.paid ? 'Paid' : 'Unpaid'}</p>
          <ul>
            ${data.cart
              ? data.cart.map(i => `<li>${i.name} - ₹${i.price} x ${i.quantity}</li>`).join('')
              : '<li>No items found</li>'}
          </ul>
          <p><strong>Total Bill:</strong> ₹${total}</p>
          <button class="deleteBtn" data-id="${id}">Delete</button>
          <hr/>
        `;
        ordersContainer.appendChild(div);
      });

      ordersContainer.addEventListener('click', async (e) => {
        if (e.target.classList.contains('deleteBtn')) {
          const id = e.target.dataset.id;
          if (confirm('Delete this order?')) {
            try {
              await deleteDoc(doc(db, 'orders', id));
              alert('Order deleted successfully');
              location.reload();
            } catch (err) {
              console.error('Failed to delete:', err);
              alert('Error deleting order');
            }
          }
        }
      });
    }
  } catch (err) {
    console.error('Failed to load orders:', err);
    alert('Error loading admin orders.');
  }
});
