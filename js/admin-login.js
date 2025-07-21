import { auth, RecaptchaVerifier } from './firebase.js';
import { signInWithPhoneNumber } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const allowedAdmins = ['+918000762101', '+917014847495'];

const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' });

document.getElementById('sendOtpBtn').addEventListener('click', async () => {
  const phone = document.getElementById('adminPhone').value.trim();
  console.log('Phone entered:', phone); 

  if (!allowedAdmins.includes(phone)) {
    alert('Unauthorized Admin Number');
    return;
  }

  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
    window.confirmationResult = confirmationResult;
    document.getElementById('otpSection').style.display = 'block';
  } catch (err) {
    console.error('Error sending OTP:', err);
    alert('OTP could not be sent. Check console for details.');
  }
});

document.getElementById('verifyBtn').addEventListener('click', async () => {
  const otp = document.getElementById('otp').value;
  try {
    await window.confirmationResult.confirm(otp);
    window.location.href = 'admin.html';
  } catch (err) {
    console.error('OTP verification failed:', err);
    alert('Invalid OTP');
  }
});
