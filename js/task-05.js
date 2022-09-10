const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputEnter = () => {
    if (inputEl.value.length > 0) {
        outputEl.textContent = inputEl.value;
    } else {
        outputEl.textContent = 'Anonymous';
    }
}

inputEl.addEventListener('input', inputEnter);
