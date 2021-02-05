
export function HomeContainer () {
    const $ = selector => {
        return document.querySelector(selector);
    };

    const addContainer = document.createElement('container');
    const addDivAir = document.createElement('div');
    const addPromo = document.createElement('div');
    const sale = document.createElement('div');
    const newAirs = document.createElement('div');
    const comingSon = document.createElement('div');

    addContainer.classList.add('home-container');
    addDivAir.classList.add('div-air');
    addPromo.classList.add('div-promo');

    sale.classList.add('div-sale');
    newAirs.classList.add('div-new-arrivals');
    comingSon.classList.add('div-coming-son');

    addDivAir.innerHTML = `
    <h1 class="air-max-98">air max 98</h1>
    <p class="div-air-p">The Nike Air Max 98 brings back retro Air Max style with contemporary comfort innovations. A full-length Max Air unit gives total cushioning in every step.</p>
    <img class="img-div-air" src="./../../img/divAir.png">
    `;
    sale.innerHTML = '<p>Summer</br>Sale</br>Up to 50%</p>';
    newAirs.innerHTML = '<p>New</br>Air</p>';
    comingSon.innerHTML = '<p>Coming</br>Son</p>';

    $('body').appendChild(addContainer);
    addContainer.appendChild(addDivAir);
    addContainer.appendChild(addPromo);
    addPromo.appendChild(sale);
    addPromo.appendChild(newAirs);
    addPromo.appendChild(comingSon);
}