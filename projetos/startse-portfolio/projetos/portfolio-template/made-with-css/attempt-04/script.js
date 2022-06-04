var check = document.querySelector("#menu-checkbox")
document.querySelector("#menu-checkbox").addEventListener("change", checked)
document.querySelector(".hide-header").addEventListener("click", showhide)
document.querySelector(".hide-conhecimentos").addEventListener("click", showhide)
document.querySelector(".hide-projetos").addEventListener("click", showhide)
document.querySelector(".hide-contato").addEventListener("click", showhide)
document.querySelector(".hide-orcamento").addEventListener("click", showhide)



function checked() {
    if (check.checked) {
        document.querySelector(".menu-lateral").classList.add("show-hide")
    } else {
        document.querySelector(".menu-lateral").classList.remove("show-hide")
    };
}

function showhide() {

    document.querySelector(".menu-lateral").classList.remove("show-hide");


    var boxes = document.getElementsByName("menu");
    for (var i = 0; i < boxes.length; i++)
        boxes[i].checked = false;
};





document.querySelector("#amount").addEventListener("change", atualizarPreco)
document.querySelector("#needJS").addEventListener("change", atualizarPreco)
document.querySelector("#layout-yes").addEventListener("change", atualizarPreco)
document.querySelector("#layout-no").addEventListener("change", atualizarPreco)
document.querySelector("#time").addEventListener("change", atualizarPreco)

function atualizarPreco() {

    var amount = document.querySelector("#amount").value
    var js = document.querySelector("#needJS").checked
    var layoutYes = document.querySelector("#layout-yes").checked
    var time = document.querySelector("#time").value


    if (time == 1) {
        document.querySelector("label[for=time]").innerHTML = `Prazo: ${time}
        semana`
    } else {
        document.querySelector("label[for=time]").innerHTML = `Prazo: ${time}
        semanas`

    }


    let price = amount * 100
    if (js) price = price * 1.1
    if (layoutYes) price = price + 500
    let urgency = 1 - (time * 0.1)
    price = price * (1 + urgency)

    document.querySelector("#price").innerHTML = `R$${price.toFixed(0)},00`
};