function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        alert('Name must be at least 2 characters long.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long.');
        return false;
    }

    return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateContactForm()) {
        event.preventDefault();
    }
});