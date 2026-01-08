function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let isValid = true;
    const errors = [];
    
    if (name.length < 2) {
        errors.push('Name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address');
        isValid = false;
    }
    
    if (message.length < 10) {
        errors.push('Message must be at least 10 characters long');
        isValid = false;
    }
    
    const errorContainer = document.getElementById('form-errors');
    errorContainer.innerHTML = '';
    
    if (!isValid) {
        errors.forEach(error => {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = error;
            errorContainer.appendChild(errorElement);
        });
        errorContainer.style.display = 'block';
    } else {
        errorContainer.style.display = 'none';
    }
    
    return isValid;
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