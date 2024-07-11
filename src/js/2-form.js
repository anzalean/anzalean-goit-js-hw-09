const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');
populateForm();
const formData = {
    email: '',
    message: ''
};
form.addEventListener('input', handleInput);
function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        email.value = savedData.email;
        message.value = savedData.message;
    }
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) { 
    event.preventDefault();
    if (email.value.trim() === '' || message.value.trim() === '') {
        return alert('Fill please all fields');
    }
    console.log(formData);
    localStorage.clear();
    form.reset();
    formData.email = '';
    formData.message = '';
}