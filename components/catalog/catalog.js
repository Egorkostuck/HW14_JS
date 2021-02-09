function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

export let count = 0;

export function CatalogContainer(products) {
    console.log(products);
    document.querySelector('.container') ? document.querySelector('.container').remove() : null
    
    const catalog = document.createElement('section');
    catalog.addClass('container');
    catalog.addClass('catalog-container');
    catalog.addTo('body');

    

    products.map(item => {
        const good = document.createElement('div');
        good.listener('click', () => {
            count++;
            if(count !== 0) {
                const circle = document.createElement('div');
                circle.addClass('number-of-purchases');
                circle.innerHTML = `${count}`;
                document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null
                circle.addTo('header');
            }
            // debugger
            let myCookie = getCookie('products');
            if(myCookie !== undefined) {
                myCookie.push(item.id);
            } else {
                myCookie = [item.id];
            }
            setCookie('products', myCookie);
        });
        good.insertAdjacentHTML('beforeend', `
        <div class="product-block">
            <h3>${item.title}</h3>
            <img src="${item.image}" alt="">
            <p>${item.description}</p>
            <span>$${item.price}</span>
            <span>
                <i class="icon-shopping-cart"></i>
            </span>        
        </div>
        `);
        good.addTo('.container');
    });
}