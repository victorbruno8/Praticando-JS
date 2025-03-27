

const list = document.querySelector('ul');

const buttonForEach = document.querySelector('#foreach');
const buttonMap = document.querySelector('#map');
const buttonReduce = document.querySelector('#reduce');
const buttonFilter = document.querySelector('#filter');

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderList(products) {
    list.innerHTML = ''; 

    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.classList.add('card');

        li.innerHTML = `
            <img src="${product.src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${formatCurrency(product.price)}</p>
        `;

        list.appendChild(li);

        setTimeout(() => {
            li.classList.add('show');
        }, index * 150);
    });
}

buttonForEach.addEventListener('click', () => {
    renderList(menuOptions);
});

buttonMap.addEventListener('click', () => {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9
    }));

    renderList(newPrices);
});

buttonReduce.addEventListener('click', () => {
    const totalPrice = menuOptions.reduce((acc, current) => acc + current.price, 0)
    list.innerHTML = ''

    const li = document.createElement('li')
    li.classList.add('total-price-card')
    li.innerHTML = `<h2>O valor total de todos os produtos é de <span>${formatCurrency(totalPrice)}</span></h2>`

    list.appendChild(li)
   
   
});


buttonFilter.addEventListener('click', () => {
    const veganProducts = menuOptions.filter(product => product.vegan)

    list.innerHTML = ''

    renderList(veganProducts)
})








