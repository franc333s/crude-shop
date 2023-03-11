
const jsBtn = document.querySelector('.jsBtn');
jsBtn.addEventListener('click', toggleMenu);

const jsHide = document.querySelector('.jsHide');

function toggleMenu() {
    console.log('aloha');
    jsHide.classList.toggle('jsHide')
}



// cerrar


const jsList = document.querySelector('.jsList');
jsList.addEventListener('click', hideMenu);

const closeMenu = document.querySelector('.jsList');

function hideMenu() {
    closeMenu.classList.toggle('jsHide')
}