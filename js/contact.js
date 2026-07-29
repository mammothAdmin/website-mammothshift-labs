/* MammothShift Labs — Contact form */

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const errorEl = document.getElementById('form-error');
  const originalText = submitBtn.textContent;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  errorEl.style.display = 'none';

  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const organization = document.getElementById('org').value.trim();
  const message = document.getElementById('message').value.trim();

  const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
    .map(cb => cb.value)
    .join(', ');

  const fullMessage = [
    message,
    interests ? `\nInterested in: ${interests}` : ''
  ].filter(Boolean).join('');

  try {
    const response = await fetch('https://contactus.api.mammothshift-labs.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        company: organization || undefined,
        message: fullMessage,
        site: 'mammothshift-labs.com'
      })
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = 'thank-you.html';
    } else {
      errorEl.style.display = 'block';
    }
  } catch {
    errorEl.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});
