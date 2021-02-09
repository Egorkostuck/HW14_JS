export function ContactContainer () {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const contact = document.createElement('section');
    contact.addClass('container');
    contact.addClass('contact-container');
    contact.innerHTML = `
    <div class="contact-block">
        <h2>Our contact</h2>
        <p> 
            +375 25 994-03-37<br>
            +375 25 994-03-37<br>
            +375 25 994-03-37<br>
            +375 25 994-03-37
        </p>
        <h2>Our address</h2>
        <p>414-7533 Nemiga Street</br>
            Minsk City 220055
        </p>
    </div>
    <div class="map-block">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.26641263629!2d27.553339162975067!3d53.904507054452715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeba1a658af%3A0x83b25b52609df211!2zTmVtaWdhIDMsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1612800672610!5m2!1sru!2sby" width="560" height="560" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    `;
    contact.addTo('body');    
}