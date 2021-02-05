import './../components/header/header.js';
import {newArr} from './header/header.js';
import {HomeContainer} from './home/homePage.js';

const $ = (selector) => {
    return document.querySelector(selector);
};

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
newArr.forEach(item => {
    $('header').appendChild(create(item.tag, item.html, item.classes));    
});

HomeContainer();

newArr.map(linkName => {
    const link = document.querySelector('li');
    link.addEventListener('click', () => {
        location.hash = linkName.name;
        linkName.component();
        // debugger     
    });
});