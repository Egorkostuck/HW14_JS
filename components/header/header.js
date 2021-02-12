
// const createBody = document.querySelector('body');
// const createHeader = document.createElement('header');
import {HomeContainer} from './../home/homePage.js';
import {CatalogContainer} from '../catalog/catalog.js';
import {ContactContainer} from './../contact/contact.js';
import {CartContainer} from './../cart/cart.js';
import {count} from '../catalog/catalog.js';
export let routes = [
    {tag:'li', path: '/', html: '<img class="img-logo" src="./../../img/logo.png" alt="logo"></img>', classes:['link'], component: HomeContainer},   
    {tag: 'li', path: 'catalog', html: 'Catalog', classes: ['link'], component: CatalogContainer},
    {tag: 'li', path: 'contact', html: 'Contact', classes: ['link'], component: ContactContainer},
    {tag: 'li', path: 'cart', html: '<i class="icon-shopping-cart"></i>', classes: ['link'], component: CartContainer}
];