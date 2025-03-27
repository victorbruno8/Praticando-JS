// const list = document.querySelector('ul');
// const buttonForEach = document.querySelector('#foreach');
// let myList = ''




// buttonForEach.addEventListener('click', () => {

//     menuOptions.forEach((product) => {
//         myList +=  `

//         <li>
//                 <img src="${product.src}" alt="${product.name}">
//                 <h2>${product.name}</h2>
//                 <p>R$ ${product.price}</p>
//         </li>

//     `
//     })

//     list.innerHTML = myList
// })



// const list = document.querySelector('ul');

// const buttonForEach = document.querySelector('#foreach');
// const buttonMap = document.querySelector('#map');

// buttonForEach.addEventListener('click', () => {
//     list.innerHTML = ''; // Limpa a lista antes de adicionar os elementos novamente

//     menuOptions.forEach((product, index) => {
//         const li = document.createElement('li');
//         li.classList.add('card'); // Classe para a animação

//         li.innerHTML = `
//             <img src="${product.src}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p>R$ ${product.price}</p>
//         `;

//         list.appendChild(li);

//         // Adiciona um pequeno delay para ativar a animação em sequência
//         setTimeout(() => {
//             li.classList.add('show');
//         }, index * 150);
//     });
// });


// buttonMap.addEventListener('click', () => {
//     const newPrices = menuOptions.map((product) => ({
      
//             ...product,
//             price: product.price * 0.9,
       
//     }));

//     list.innerHTML = ''; // Limpa a lista antes de adicionar os elementos novamente

//     newPrices.forEach((product) => {
//         const li = document.createElement('li');
//         li.classList.add('card'); // Classe para a animação

//         li.innerHTML = `
//             <img src="${product.src}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p>R$ ${product.price}</p>
//         `;

//         list.appendChild(li);

//         // Adiciona um pequeno delay para ativar a animação em sequência
//         setTimeout(() => {
//             li.classList.add('show');
//         }, newPrices.indexOf(product) * 150);
//     });

// })


const list = document.querySelector('ul');

const buttonForEach = document.querySelector('#foreach');
const buttonMap = document.querySelector('#map');
const buttonReduce = document.querySelector('#reduce');
const buttonFilter = document.querySelector('#filter');

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderList(products) {
    list.innerHTML = ''; // Limpa a lista antes de adicionar os elementos novamente

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








