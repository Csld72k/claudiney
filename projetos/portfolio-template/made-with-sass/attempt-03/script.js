//SHOW AND HIDE MENU
// menuHamburguer = document.querySelector('label[for=hamburguer-checkbox]')
menuHamburguer = document.querySelector('#label')
menuCheckbox = document.querySelector('#hamburguer-checkbox')
menu = document.querySelector('#nav-menu')

function showHideMenu() {
    if (menuCheckbox.checked) {
        menu.classList.add('show')
    } else {
        menu.classList.remove('show')
    }
}

menuHamburguer.addEventListener('input', showHideMenu)