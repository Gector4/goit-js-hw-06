function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
  buttonEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = buttonEl.style.backgroundColor;
});