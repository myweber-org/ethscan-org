function validateContactForm() {
    const form = document.getElementById('contactForm');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    let isValid = true;

    emailError.textContent = '';
    messageError.textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (message.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    if (isValid) {
        form.submit();
    }

    return false;
}