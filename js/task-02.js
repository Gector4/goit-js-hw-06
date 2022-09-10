const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);
console.log(ingredients);

const listEl = ingredients.map(ingredient => {
const listLi = document.createElement('li');
listLi.textContent = ingredient;
listLi.classList.add('item');
return listLi;
  });

  ingredientsEl.append(...listEl);