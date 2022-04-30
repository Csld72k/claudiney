var menu = document.querySelector(".label-hamburguer")
menu.addEventListener("click", function() {
    document.querySelector(".menu-lateral").classList.toggle("show-menu");
});

var menu = document.querySelector(".label-hamburguer")
menu.addEventListener("click", function() {
    document.querySelector(".arrow-home").classList.toggle("show-menu");
});





document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function() {
    prazo = document.querySelector("#prazo").value
    if (prazo == 1) {
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    } else {
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizarPreco()
})



function atualizarPreco() {

    var qtde = document.querySelector("#qtde").value
    var js = document.querySelector("#js").checked
    var layout = document.querySelector("#layout-sim").checked
    var prazo = document.querySelector("#prazo").value


    let preco = qtde * 100
    if (js) preco = preco * 1.1
    if (layout) preco = preco + 500
    let taxaUrgencia = 1 - (prazo * 0.1)
    preco = preco * (1 + taxaUrgencia)

    document.querySelector("#preco").innerHTML = `R$${preco.toFixed(0)},00`
}













// document.querySelector("#qtde").addEventListener("change", atualizarPreco)
// document.querySelector("#js").addEventListener("change", atualizarPreco)
// document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
// document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
// document.querySelector("#prazo").addEventListener("change", function() {
//     prazo = document.querySelector("#prazo").value

//     if (prazo > 1) {
//         document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
//     } else {
//         document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
//     }
//     atualizarPreco()
// })


// function atualizarPreco() {
//     qtde = document.querySelector("#qtde").value
//     temJS = document.querySelector("#js").checked
//     layoutSim = document.querySelector("#layout-sim").checked
//     prazo = document.querySelector("#prazo").value

//     let preco = qtde * 100;
//     if (temJS) preco *= 1.1
//     if (layoutSim) preco += 500
//     let taxaUrgencia = 1 - prazo * 0.1
//     preco = preco * (1 + taxaUrgencia)

//     document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(0)},00`
// }