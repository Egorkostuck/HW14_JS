import './utilits/utilits.js';
import './../components/header/header.js';
import {routes} from './header/header.js';
import {HomeContainer} from './home/homePage.js';
import data from './api/api.js'

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