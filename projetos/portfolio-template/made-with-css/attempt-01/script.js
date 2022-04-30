var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("show-menu");
});

var arrow = document.querySelector(".arrow-up");
hamburguer.addEventListener("click", function() {
    document.querySelector(".arrow-up").classList.toggle("show-menu");
});




document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    if (prazo > 1) {
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    } else {
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    }
    atualizarPreco()
})

function atualizarPreco() {

    const qtde = document.querySelector("#qtde").value
    const js = document.querySelector("#js").checked
    const layout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100
    if (js) preco = preco * 1.1
    if (layout) preco = preco + 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco = preco * (1 + taxaUrgencia)
    document.querySelector("#preco").innerHTML = `R$${preco.toFixed(0)},00`

}