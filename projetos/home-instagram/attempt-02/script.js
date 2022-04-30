// AUTO CHANGE IMGAE
let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".cell-phone img")
max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)


// INTERACTIVE SPANS IN LOGIN AND PASSWORD INPUTS | AND BUTTONS, LOGIN AND SHOW/HIDE  
// THE SPANS ACT LIKE PLACEHOLDER IN THE INPUTS MAKING THEM UP AND DOWN WHEN TYPING/DELETING SOMETHING
// TWO BUTTONS. 1st MAKES SHOW/HIDE PASSWORD ON CLICK (ONLY APPEARS WHEN INPUT[TYPE="PASSWORD"].LENGTH >= 1). 2nd IS THE LOGIN BUTTON THAT IS ONLY AVAILABLE WHEN INPUT[TYPE="USERNAME"].LENGTH >= 1 AND INPUT[TYPE="PASSWORD"].LENGTH >= 4
var spanUsername = document.querySelector(".username")
var spanPassword = document.querySelector(".password")
var inputUsername = document.querySelector("#username")
var inputPassword = document.querySelector("#password")
var showPassword = document.querySelector(".show-password")
var loginButton = document.querySelector(".login-btn")


function inputPlaceHolder() {

    const usernameValue = document.querySelector("#username").value
    const passwordValue = document.querySelector("#password").value

    if (usernameValue.length >= 1) {
        spanUsername.classList.add("content")
        inputUsername.classList.add("content")
    } else {
        spanUsername.classList.remove("content")
        inputUsername.classList.remove("content")
    }

    if (passwordValue.length >= 1) {
        spanPassword.classList.add("content")
        inputPassword.classList.add("content")
        showPassword.classList.add("on")
    } else {
        spanPassword.classList.remove("content")
        inputPassword.classList.remove("content")
        showPassword.classList.remove("on")
    }

    if (usernameValue.length >= 1 && (passwordValue).length >= 4) {
        loginButton.classList.add("content")
    } else {
        loginButton.classList.remove("content")
    }
}

function showHidePassword() {
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
        showPassword.classList.add("show")
        showPassword.innerHTML = "Hide"
    } else {
        inputPassword.type = "password"
        showPassword.classList.remove("show")
        showPassword.innerHTML = "Show"

    }

}

inputUsername.addEventListener("input", inputPlaceHolder)
inputPassword.addEventListener("input", inputPlaceHolder)
showPassword.addEventListener("click", showHidePassword)