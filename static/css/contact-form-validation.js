function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === '') {
        alert('Please enter your name');
        return false;
    }
    
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (message.length < 10) {
        alert('Message must be at least 10 characters long');
        return false;
    }
    
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }
});