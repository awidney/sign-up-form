const pwd = document.querySelector('input[name=password]');
const pwd_confirm = document.querySelector('input[name=password_confirm]');
const form = document.querySelector('form');
const error_message = document.querySelector('.error_message');

form.addEventListener('submit', (e) => {
    if (pwd.value != pwd_confirm.value) {
        e.preventDefault();
        error_message.textContent = '*Passwords do not match';
        pwd.classList.add('invalid');
        pwd_confirm.classList.add('invalid');
    }
});