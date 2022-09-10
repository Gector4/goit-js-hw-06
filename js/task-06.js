const validationInputEl = document.querySelector('#validation-input');

const checksContent = () => {
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
        return;
    }
    else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    };
}
validationInputEl.addEventListener('blur', checksContent);