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
}function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let errors = [];
    
    if (name.length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (message.length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    const errorContainer = document.getElementById('form-errors');
    errorContainer.innerHTML = '';
    
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = error;
            errorContainer.appendChild(errorElement);
        });
        return false;
    }
    
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!validateContactForm()) {
                event.preventDefault();
            }
        });
    }
});