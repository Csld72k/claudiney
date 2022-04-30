// Menu Hamburguer
menuCheckbox = document.querySelector("#checkbox-hamburguer")
menuCheckbox.addEventListener("change", checked)

function checked() {
    if (menuCheckbox.checked) {
        document.querySelector(".nav-menu").classList.add("hide-show")
        document.querySelector(".btn-header").classList.add("hide")
    } else {
        document.querySelector(".nav-menu").classList.remove("hide-show")
        document.querySelector(".btn-header").classList.remove("hide")
    }
}

// Retrair Menu ao clicar nos links
document.querySelector(".home").addEventListener("click", showHide)
document.querySelector(".conhecimentos").addEventListener("click", showHide)
document.querySelector(".projetos").addEventListener("click", showHide)
document.querySelector(".contato").addEventListener("click", showHide)
document.querySelector(".orcamento").addEventListener("click", showHide)

function showHide() {
    document.querySelector(".nav-menu").classList.remove("hide-show")
    menuCheckbox.checked = false
}

// Formulário de Orçamento
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#script").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", atualizarPreco)

function atualizarPreco() {
    qtde = document.querySelector("#qtde").value
    script = document.querySelector("#script").checked
    layout = document.querySelector("#layout-sim").checked
    prazo = document.querySelector("#prazo").value

    if (prazo > 1) {
        document.querySelector(".prazo").innerHTML = `Prazo: ${prazo} Semanas`
    } else {
        document.querySelector(".prazo").innerHTML = `Prazo: ${prazo} Semana`
    }

    let preco = qtde * 100
    if (script) preco = preco * 1.1
    if (layout) preco = preco + 500
    let taxaUrgencia = 1 - (prazo * 0.1)
    preco = preco * (1 + taxaUrgencia)

    document.querySelector("#preco").innerHTML = `R$${preco.toFixed(0)},00`
}