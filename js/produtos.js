let produtosFirst = document.querySelector('#btnProdutos-first')
let produtosSecond = document.querySelector('#btnProdutos-second')
let produtosThird = document.querySelector('#btnProdutos-third')
const minusFirst = document.querySelector('#minus1')
const minusSecond = document.querySelector('#minus2')
const minusThird = document.querySelector('#minus3')

let sectionProdutosSuplementos = document.querySelector('#section-produtos-suplementos')
let sectionProdutosOrganico = document.querySelector('#section-produtos-organico')
let sectionProdutosPersonalizados = document.querySelector('#section-produtos-personalizados')

produtosFirst.addEventListener('click', () => {
    if(sectionProdutosSuplementos.classList.contains("notShowing")) {
        minusFirst.textContent = "-"
        sectionProdutosSuplementos.classList.remove("notShowing")
    } else {
        minusFirst.textContent = "+"
        sectionProdutosSuplementos.classList.add("notShowing")
    }
})

produtosSecond.addEventListener('click', () => {
    if(sectionProdutosOrganico.classList.contains("notShowing")) {
        minusSecond.textContent = "-"
        sectionProdutosOrganico.classList.remove("notShowing")
    } else {
        minusSecond.textContent = "+"
        sectionProdutosOrganico.classList.add("notShowing")
    }
})

produtosThird.addEventListener('click', () => {
    if(sectionProdutosPersonalizados.classList.contains("notShowing")) {
        minusThird.textContent = "-"
        sectionProdutosPersonalizados.classList.remove("notShowing")
    } else {
        minusThird.textContent = "+"
        sectionProdutosPersonalizados.classList.add("notShowing")
    }
})