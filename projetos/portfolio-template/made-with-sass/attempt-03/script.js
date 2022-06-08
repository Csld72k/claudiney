//SHOW AND HIDE MENU
menuHamburguer = document.querySelector('#label')
menuCheckbox = document.querySelector('#hamburguer-checkbox')
menu = document.querySelector('#nav-menu')
btnArrow = document.querySelector(".btn-arrow")

function showHideMenu() {
    if (menuCheckbox.checked) {
        menu.classList.add('show')
        btnArrow.classList.add("hide")
    } else {
        menu.classList.remove('show')
        btnArrow.classList.remove("hide")
    }
}

menuHamburguer.addEventListener('input', showHideMenu)

// HIDE MENU IF YOU CLICK ON ANY LINK IN THE MENU
document.querySelector('.home').addEventListener('click', hideMenuOnClickMenuLink)
document.querySelector('.knowledge').addEventListener('click', hideMenuOnClickMenuLink)
document.querySelector('.projects').addEventListener('click', hideMenuOnClickMenuLink)
document.querySelector('.contact').addEventListener('click', hideMenuOnClickMenuLink)
document.querySelector('.budget').addEventListener('click', hideMenuOnClickMenuLink)

function hideMenuOnClickMenuLink() {
    menu.classList.remove('show')
    menuCheckbox.checked = false
    btnArrow.classList.remove("hide")
}

// SWITCH THEME BUTTON WITH ARROW FUNCTION
document.querySelector('#theme-toggle').addEventListener('input', () => {
    if (document.querySelector('#theme-toggle').checked) {
        document.querySelector('html').classList.remove('light')
        document.querySelector('html').classList.add('dark')
    } else {
        document.querySelector('html').classList.remove('dark')
        document.querySelector('html').classList.add('light')
    }
})


// CONTACT SECTION PLACEHOLDER
var labelName = document.querySelector('label[for=name]')
var labelEmail = document.querySelector('label[for=email]')
var labelMessage = document.querySelector('label[for=message]')
var inputName = document.querySelector('#name')
var inputEmail = document.querySelector('#email')
var inputMessage = document.querySelector('#message')

function contactPlaceHolder() {
    const placeHolderName = document.querySelector('#name').value
    const placeHolderEmail = document.querySelector('#email').value
    const placeHolderMessage = document.querySelector('#message').value

    if (placeHolderName.length > 0) {
        labelName.classList.add('content')
    } else {
        labelName.classList.remove('content')
    }
    if (placeHolderEmail.length > 0) {
        labelEmail.classList.add('content')
    } else {
        labelEmail.classList.remove('content')
    }
    if (placeHolderMessage.length > 0) {
        labelMessage.classList.add('content')
    } else {
        labelMessage.classList.remove('content')
    }
}

inputName.addEventListener('input', contactPlaceHolder)
inputEmail.addEventListener('input', contactPlaceHolder)
inputMessage.addEventListener('input', contactPlaceHolder)

// BUDGET CALC PRICE
var amount = document.querySelector('#amount')
var js = document.querySelector('#js')
var layoutYes = document.querySelector('#layout-yes')
var layoutNo = document.querySelector('#layout-no')
var deadline = document.querySelector('#deadline')
var time = document.querySelector('.time')

function budgetCalc() {
    var price = amount.value * 100 // PRICE = R$100,00 PER PAGE
    if (js.checked) price *= 1.1 //PRICE = + 10% IF YOU NEED SCRIPT JS (THIS 10% ONLY APPLY IN PRICE PER PAGE)
    if (layoutYes.checked) price += 500 // PRICE = + R$500,00 IF YOU NEED LAYOUT
    let urgency = deadline.value / 10 - 1
    price *= (1 + urgency * -1) // PRICE = PRICE * URGENCY. BEING DEADLINE 10 WEEKS = + 0% AND DEADLINE 1 WEEK = + 90%

    if (deadline.value == 1) {
        time.innerHTML = `Deadline: ${deadline.value} week`
    } else {
        time.innerHTML = `Deadline: ${deadline.value} weeks`
    }

    document.querySelector('.price').innerHTML = `$${price.toFixed(0)},00` // TOFIXED(0) CAUSE I WANT TO INSERT COMMA FOR DECIMALS IN PLACE OF DOT

}

amount.addEventListener('input', budgetCalc)
js.addEventListener('input', budgetCalc)
layoutYes.addEventListener('input', budgetCalc)
layoutNo.addEventListener('input', budgetCalc)
deadline.addEventListener('input', budgetCalc)