const form = document.querySelector('form');
const username = document.querySelector('#username');
const message = document.querySelector('#message');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');

//errors
const errorUsername = document.querySelector('.error-username');
const errorMessage = document.querySelector('.error-message');
const errorPhone = document.querySelector('.error-phone');
const errorEmail = document.querySelector('.error-email');

const errors = Array.from(document.querySelectorAll('[data-show]'));

const phoneRegex = /^\+380/
const emailRegex = /^[^@\s]+@[a-z]+\.[a-z]{2,}$/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let canSend = true;

    errorUsername.dataset.show = String(username.value.trim().length < 1);

    errorMessage.dataset.show = String(message.value.trim().length < 5);

    const phoneValue = phone.value.trim();

    switch (true) {
        case phoneValue.length < 1:
            errorPhone.textContent = "Phone number is required";
            errorPhone.dataset.show = "true";
            break;
        case !phoneRegex.test(phoneValue):
            errorPhone.textContent = "The phone number must start with +380";
            errorPhone.dataset.show = "true";
            break;
        default:
            errorPhone.dataset.show = "false";
    }

    const emailValue = email.value.trim();

    switch (true) {
        case emailValue.length < 1:
            errorEmail.textContent = "Email is required";
            errorEmail.dataset.show = "true";
            break;
        case !emailRegex.test(emailValue):
            errorEmail.textContent = "The email must be valid";
            errorEmail.dataset.show = "true";
            break;
        default:
            errorEmail.dataset.show = "false";
    }

    errors.forEach(item => {
        if (item.dataset.show === "true") {
            item.style.display = 'block';
            canSend = false;
        } else {
            item.style.display = 'none';
        }
    })

    if (canSend) {
        form.reset()
    }
})