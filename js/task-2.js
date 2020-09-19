const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listForAddingItems = document.querySelector(`#ingredients`);


const addListItems = (array, list) => {
    array.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    })
}

addListItems(ingredients, listForAddingItems);