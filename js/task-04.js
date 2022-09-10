let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action ="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action ="increment"]');
const myValue = document.querySelector("#value");

const newDecrement = () => {
    counterValue -= 1;
    myValue.textContent = counterValue;
};

const newIncrement = () => {
    counterValue += 1;
    myValue.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", newDecrement);
incrementBtnEl.addEventListener("click", newIncrement);


