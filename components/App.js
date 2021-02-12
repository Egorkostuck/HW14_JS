import './utilits/utilits.js';
import './../components/header/header.js';
import {routes} from './header/header.js';
import {HomeContainer} from './home/homePage.js';
import data from './api/api.js'
import {getCookie} from './useCookie.js';

const $ = (selector) => {
    return document.querySelector(selector);
};

export let products = [];

data().then(result => {
    products = result;
    // debugger
});

const create = (tag, html, classes, attrs = []) => {
    const element = document.createElement(tag)
    element.classList.add(classes)
    for (let i = 0; i < attrs.lenght; i++) {
        element.setAttribute(attrs[i].key, attrs[i].value)
    }
    element.innerHTML = html
    document.body.appendChild(element);
    return element
};


const addTo = (element, toElement) => {
    $(toElement).appendChild(element);
};

const createHeader = create('header','','header');
routes.forEach(item => {
    $('header').appendChild(create(item.tag, item.html, item.classes));    
});

HomeContainer();
const link = document.querySelectorAll('li');

routes.map((route, index) => {
    link[index].addClass('my-link').listener('click', () => {
        location.hash = route.path;
        route.component(products);
    });
});

const cartGood = () => {
    let count = getCookie('cartItem');
    console.log(count);
    if(count !== 0 && count !== undefined) {
        const circle = document.createElement('div');
        circle.addClass('number-of-purchases');
        circle.innerHTML = `${count}`;
        document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null
        circle.addTo('header');
    }
};
cartGood();