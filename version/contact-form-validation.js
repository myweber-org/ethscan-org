document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submitBtn');
    const errorContainer = document.getElementById('errorMessages');

    function validateName() {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            return 'Name can only contain letters and spaces';
        }
        return '';
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        if (message.length < 10) {
            return 'Message must be at least 10 characters long';
        }
        if (message.length > 1000) {
            return 'Message cannot exceed 1000 characters';
        }
        return '';
    }

    function displayErrors(errors) {
        errorContainer.innerHTML = '';
        if (errors.length === 0) return;

        const errorList = document.createElement('ul');
        errorList.className = 'error-list';
        
        errors.forEach(error => {
            const listItem = document.createElement('li');
            listItem.textContent = error;
            errorList.appendChild(listItem);
        });
        
        errorContainer.appendChild(errorList);
        errorContainer.style.display = 'block';
    }

    function validateForm() {
        const errors = [];
        
        const nameError = validateName();
        if (nameError) errors.push(nameError);
        
        const emailError = validateEmail();
        if (emailError) errors.push(emailError);
        
        const messageError = validateMessage();
        if (messageError) errors.push(messageError);
        
        displayErrors(errors);
        submitButton.disabled = errors.length > 0;
        
        return errors.length === 0;
    }

    function handleInputValidation(event) {
        const target = event.target;
        let error = '';
        
        if (target === nameInput) {
            error = validateName();
        } else if (target === emailInput) {
            error = validateEmail();
        } else if (target === messageInput) {
            error = validateMessage();
        }
        
        if (error) {
            target.classList.add('invalid');
            target.setAttribute('title', error);
        } else {
            target.classList.remove('invalid');
            target.removeAttribute('title');
        }
        
        validateForm();
    }

    nameInput.addEventListener('input', handleInputValidation);
    emailInput.addEventListener('input', handleInputValidation);
    messageInput.addEventListener('input', handleInputValidation);
    nameInput.addEventListener('blur', handleInputValidation);
    emailInput.addEventListener('blur', handleInputValidation);
    messageInput.addEventListener('blur', handleInputValidation);

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
            submitButton.disabled = true;
            setTimeout(() => {
                submitButton.disabled = false;
            }, 3000);
        }
    });

    validateForm();
});