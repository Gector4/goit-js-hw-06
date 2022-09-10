const listItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemsEl.length}`);

const allCategoriesArray = listItemsEl.forEach((item)=> {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elemenst: ${item.lastElementChild.children.length}`)
});