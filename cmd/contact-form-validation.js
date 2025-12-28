document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = form.querySelector('button[type="submit"]');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function updateSubmitButton() {
        const isEmailValid = validateEmail(emailInput.value);
        const isMessageValid = messageInput.value.trim().length > 10;
        
        submitButton.disabled = !(isEmailValid && isMessageValid);
        submitButton.style.opacity = submitButton.disabled ? '0.6' : '1';
    }

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    function hideError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.style.display = 'none';
        }
    }

    emailInput.addEventListener('input', function() {
        if (!validateEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            hideError(this);
        }
        updateSubmitButton();
    });

    messageInput.addEventListener('input', function() {
        if (this.value.trim().length <= 10) {
            showError(this, 'Message must be at least 10 characters');
        } else {
            hideError(this);
        }
        updateSubmitButton();
    });

    form.addEventListener('submit', function(event) {
        if (!validateEmail(emailInput.value) || messageInput.value.trim().length <= 10) {
            event.preventDefault();
            alert('Please fix the errors before submitting');
        }
    });

    updateSubmitButton();
});