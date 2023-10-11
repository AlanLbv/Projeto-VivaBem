let inputNome = document.querySelector('#inputNome-IMC');
let inputAltura = document.querySelector('#inputAltura-IMC');
let inputPeso = document.querySelector('#inputPeso-IMC');
const buttonIMC = document.querySelector('#button-IMC');
const divResultado = document.querySelector('#divResultado')

buttonIMC.addEventListener('click', (event) => {
    event.preventDefault()
    if (inputAltura.value % 1 != 0 && !isNaN(inputAltura.value % 1)) {
        divResultado.classList.add('div-resultado')
        if (calculaIMC(inputAltura.value, inputPeso.value).toFixed(2) <= 18.5) {
            divResultado.innerHTML = `Olá ${inputNome.value}, seu IMC é:
            ${calculaIMC(inputAltura.value, inputPeso.value).toFixed(1)}. Seu imc está abaixo!`
        } else if(calculaIMC(inputAltura.value, inputPeso.value).toFixed(2) > 18.5 && calculaIMC(inputAltura.value, inputPeso.value).toFixed(2) <= 24.9) {
            divResultado.innerHTML = `Olá ${inputNome.value}, seu IMC é:
            ${calculaIMC(inputAltura.value, inputPeso.value).toFixed(1)}. Seu imc está ideal!`
        } else{
            divResultado.innerHTML = `Olá ${inputNome.value}, seu IMC é:
            ${calculaIMC(inputAltura.value, inputPeso.value).toFixed(1)}. Seu imc está acima!`
        }
    } else {
        alert('A altura, tem que estar em virgula, como no exemplo: X,XX');
    }
})

function calculaIMC(altura, peso) {
    return peso / (altura * altura)
}