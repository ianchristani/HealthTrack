/* mouse events*/
/* creating the objects */
const navbar = document.querySelector('#navbar');

const contact = document.querySelector('#contact');
const helpp = document.querySelector('#helpp');
const about = document.querySelector('#about');

const help = document.querySelector('#help');
const aboutus = document.querySelector('#aboutus');
const contactform = document.querySelector('#contactform');

/* ******************************************************** */
/* hidding the menus */
navbar.addEventListener('click', ()=>{
    contactform.style.display = 'none';
    aboutus.style.display = 'none';
    help.style.display = 'none';
});

/* ******************************************************** */
/* footer */
contact.addEventListener('click', ()=>{
    contactform.style.display = 'initial';
    help.style.display = 'none';
    aboutus.style.display = 'none';
});

contactform.addEventListener('mouseover', ()=>{
    contactform.style.display = 'initial';
});

helpp.addEventListener('click', ()=>{
    contactform.style.display = 'none';
    help.style.display = 'initial';
    aboutus.style.display = 'none';
});

about.addEventListener('click', ()=>{
    contactform.style.display = 'none';
    help.style.display = 'none';
    aboutus.style.display = 'initial';
});
