// SHOW/HIDE MENU
menuCheckbox = document.querySelector("#menu-checkbox")
navMenu = document.querySelector(".nav-menu")
btnArrow = document.querySelector(".btn-arrow")

function showHideMenu() {
    if (menuCheckbox.checked) {
        navMenu.classList.add("show")
        btnArrow.classList.add("hide")

    } else {
        navMenu.classList.remove("show")
        btnArrow.classList.remove("hide")

    }
}

menuCheckbox.addEventListener("change", showHideMenu)

// HIDE MENU IF YOU CLICK ON ANY LINK IN THE MENU
document.querySelector(".home").addEventListener("click",
    hideMenu)
document.querySelector(".knowledge").addEventListener("click",
    hideMenu)
document.querySelector(".projects").addEventListener("click",
    hideMenu)
document.querySelector(".contact").addEventListener("click",
    hideMenu)
document.querySelector(".budget").addEventListener("click",
    hideMenu)

function hideMenu() {

    navMenu.classList.remove("show")
    menuCheckbox.checked = false
    btnArrow.classList.remove("hide")
}

// CONTACT SECTION PLACEHOLDER
var inputName = document.querySelector("#name")
var inputEmail = document.querySelector("#email")
var inputMesage = document.querySelector("#mesage")
var labelName = document.querySelector("label[for=name]")
var labelEmail = document.querySelector("label[for=email]")
var labelMesage = document.querySelector("label[for=mesage")

function placeholder() {
    const inputNameValue = document.querySelector("#name").value
    const inputEmailValue = document.querySelector("#email").value
    const inputMesageValue = document.querySelector("#mesage").value

    if (inputNameValue.length > 0) {
        labelName.classList.add("content")
    } else {
        labelName.classList.remove("content")
    }

    if (inputEmailValue.length > 0) {
        labelEmail.classList.add("content")
    } else {
        labelEmail.classList.remove("content")
    }

    if (inputMesageValue.length > 0) {
        labelMesage.classList.add("content2")
    } else {
        labelMesage.classList.remove("content2")
    }
}

inputName.addEventListener("input", placeholder)
inputEmail.addEventListener("input", placeholder)
inputMesage.addEventListener("input", placeholder)

// BUDGET CALC PRICE
quantityPages = document.querySelector("#quantity")
js = document.querySelector("#js")
layoutYes = document.querySelector("#layout-yes")
layoutNo = document.querySelector("#layout-no")
deadLine = document.querySelector("#deadline")
time = document.querySelector(".time")

function budgetCalc() {
    price = quantityPages.value * 100 // PRICE = R$100,00 PER PAGE
    if (js.checked) price = price * 1.1 //PRICE = + 10% IF YOU NEED SCRIPT JS (THIS 10% ONLY APPLY IN PRICE PER PAGE)
    if (layoutYes.checked) price = price + 500 // PRICE = + R$500,00 IF YOU NEED LAYOUT
    urgency = deadLine.value * .1 - 1
    price = price * (1 + urgency * -1) // PRICE = PRICE * URGENCY. BEING DEADLINE 10 WEEKS = + 0% AND DEADLINE 1 WEEK = + 90%

    if (deadLine.value > 1) {
        time.innerHTML = `Deadline: ${deadLine.value} semanas` // PLURAL
    } else {
        time.innerHTML = `Deadline: ${deadLine.value} semana` // SINGULAR
    }

    document.querySelector("#price").innerHTML = `R$${price.toFixed(0)},00` // TOFIXED(0) CAUSE I WANT TO INSERT COMMA FOR DECIMALS IN PLACE OF DOT
}

quantityPages.addEventListener("input", budgetCalc)
js.addEventListener("input", budgetCalc)
layoutYes.addEventListener("input", budgetCalc)
layoutNo.addEventListener("input", budgetCalc)
deadLine.addEventListener("input", budgetCalc)