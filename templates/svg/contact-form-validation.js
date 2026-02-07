document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const errorContainer = document.getElementById('formErrors');
            
            let errors = [];
            errorContainer.innerHTML = '';
            errorContainer.classList.remove('show');
            
            if (!nameInput.value.trim()) {
                errors.push('Name is required');
                nameInput.classList.add('error');
            } else {
                nameInput.classList.remove('error');
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                errors.push('Email is required');
                emailInput.classList.add('error');
            } else if (!emailRegex.test(emailInput.value)) {
                errors.push('Please enter a valid email address');
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }
            
            if (!messageInput.value.trim()) {
                errors.push('Message is required');
                messageInput.classList.add('error');
            } else {
                messageInput.classList.remove('error');
            }
            
            if (errors.length > 0) {
                errorContainer.innerHTML = '<ul>' + errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
                errorContainer.classList.add('show');
            } else {
                contactForm.submit();
            }
        });
    }
});