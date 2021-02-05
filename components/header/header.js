
// const createBody = document.querySelector('body');
// const createHeader = document.createElement('header');
import {HomeContainer} from './../home/homePage.js';
import {WomanContainer} from './../woman/woman.js';
import {ManContainer} from './../man/man.js';
import {ContactContainer} from './../contact/contact.js';
import {CartContainer} from './../cart/cart.js';

export let newArr = [
    {tag:'li', html: '<img class="img-logo" alt="logo" src="./../../img/logo.svg"></img>', classes:['link'], name: 'logo', component: HomeContainer},   
    {tag: 'li', html: 'Woman', classes: ['link'], name: 'woman', component: WomanContainer},
    {tag: 'li', html: 'Man', classes: ['link'], name: 'Man', component: ManContainer},
    {tag: 'li', html: 'Contact', classes: ['link'], name: 'Contact', component: ContactContainer},
    {tag: 'li', html: '<i class="icon-shopping-cart"></i>', classes: ['link'], name: 'Cart', component: CartContainer}
];

// newArr.map(linkName => {
//     const link = document.querySelector('.link');
//     link.addEventListener('click', () => {
//         location.hash = link.html; 
//         link.component();        
//     });
// });