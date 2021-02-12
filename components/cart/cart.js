import {products} from './../App.js';

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
    document.cookie = updatedCookie;
}


export function CartContainer () {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null

    const cart = document.createElement('section');
    cart.addClass('container');
    cart.addClass('cart-container');
    cart.addTo('body');

    let productInCart = getCookie('products');
    let newArrProducts = [];

    products.map(key => {
        let cartBlock = document.createElement('div');
        cartBlock.addClass('cart-block');
        productInCart.reduce(
            (distinct,num) => 
                distinct.includes(JSON.stringify(num)) ? 
                (distinct) : [...distinct, JSON.stringify(num)] , [])
        .map(item => {
            item = JSON.parse(item);
            if (item.id === key.id) {
                newArrProducts.push(key);
                cartBlock.insertAdjacentHTML('beforeend', `
                <h3>${key.category}</h3>
                `);
                cartBlock.insertAdjacentHTML('beforeend', `
                <p>$${key.price}</p>
                `);
                cartBlock.insertAdjacentHTML('beforeend', `
                <img src="${key.image}" alt="">
                `);
                cartBlock.insertAdjacentHTML('beforeend', `
                <p class="description">${key.description}</p>
                `);
                cartBlock.insertAdjacentHTML('beforeend', `
                <p>${key.title}</p>
                `);
                cartBlock.insertAdjacentHTML('beforeend', `
                <input class="input-for-quantity" type="number" value="${item.count}"><button class="button-for-quantity" type="button"><i class="icon-plus"></i></button></br>
                `);

                let searchButton = cartBlock.querySelector('.button-for-quantity');
                searchButton.addEventListener('click', () => {
                    let input = cartBlock.querySelector('.input-for-quantity');
                    item.count = +input.value;
                    setCookie('products', productInCart);
                    console.log(getCookie('products'));
                   
                    searchButton.insertAdjacentHTML('afterend', `
                    <i class="icon-ok"></i>
                    `);
                });

                let removeButton = document.createElement('button');
                removeButton.addClass('remove-button');
                removeButton.setAttribute('type', 'button');
                removeButton.innerHTML = 'Remove from cart'
                
                removeButton.addEventListener('click', () => {
                    let itemInCart = +getCookie('cartItem');
                    itemInCart--;
                    const circle = document.createElement('div');
                    circle.innerHTML = `${itemInCart}`;  
                    circle.addClass('number-of-purchases');                   
                    document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null
                    circle.addTo('header');                 
                    let newProduct = productInCart.filter(item => key.id !== item.id);
                
                    setCookie('products', newProduct);
                    setCookie('cartItem', itemInCart);
                    CartContainer();
                });
                cartBlock.appendChild(removeButton);
                
            } else {
                return
            }
            cartBlock.addTo('section');
        });
        
    });
    
}

