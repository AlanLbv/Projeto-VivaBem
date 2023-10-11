let inputNomeLogin = document.querySelector("#input-nome-form")
let inputEmailLogin = document.querySelector("#input-email-form")
let inputSenhaLogin = document.querySelector("#input-senha-form")
const buttonForm = document.querySelector("#buttonForm")
const divForm = document.querySelector('#div-form')
let novoInputNome
let novoInputEmail
let novoInputSenha

buttonForm.addEventListener('click', (event) => {
    event.preventDefault()

    divForm.innerHTML = `
    <h1>Confirme suas Credenciais! </h1>
    <label for="nome-usuario">Seu Nome</label>
    <div class="div-input-form">
        <input class="input-form-feito" id="" type="text" value="${inputNomeLogin.value}">
    </div>

    <label for="email-usuario">Seu Email</label>
    <div class="div-input-form">
        <input class="input-form-feito" id="" type="email" value="${inputEmailLogin.value}">
    </div>

    <label for="senha-usuario">Sua Senha</label>
    <div class="div-input-form">
        <input class="input-form-feito" id="" type="text" value="${inputSenhaLogin.value}">
    </div>

    <button id="buttonFormConfirmar">Confirmar</button>
    `
    const buttonConfirmar = document.querySelector('#buttonFormConfirmar')

    buttonConfirmar.addEventListener('click', (event) => {
        event.preventDefault()

        divForm.innerHTML = `
    <label for="nome-usuario">Seu Nome</label>
    <div class="div-input-form">
        <input class="input-form" id="" type="text" value="${inputNomeLogin.value}" disabled="">
    </div>

    <label for="email-usuario">Seu Email</label>
    <div class="div-input-form">
        <input class="input-form" id="" type="email" value="${inputEmailLogin.value}" disabled="">
    </div>

    <label for="senha-usuario">Sua Senha</label>
    <div class="div-input-form">
        <input class="input-form" id="" type="text" value="${inputSenhaLogin.value}" disabled="">
    </div>

    <button id="buttonFormConfirmar">Confirmar</button>
    `
    })
})