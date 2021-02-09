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
        productInCart.map(item => {
            if (item === key.id) {
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
                <p>${key.description}</p>
                `);
                cartBlock.insertAdjacentHTML('beforeend', `
                <p>${key.title}</p>
                `);

                let removeButton = document.createElement('button');
                removeButton.addClass('remove-button');
                removeButton.setAttribute('type', 'button');
                removeButton.innerHTML = 'Remove from cart'
                
                removeButton.addEventListener('click', () => {
                    delete productInCart[productInCart.indexOf(key.id)];
                    setCookie('products', productInCart);
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