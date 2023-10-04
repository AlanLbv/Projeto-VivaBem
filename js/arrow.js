let btnMore = document.querySelector("#btn-saiba-mais")
let arrowDown =  document.querySelector('#arrow-down')
let mainDoc = document.querySelector('#main')

btnMore.addEventListener('click', () =>{
    console.log(btnMore.textContent);
    arrowDown.style.transform = "rotate(180deg)";
    mainDoc.innerHTML += `
                <input id="focus-arrow" class="input-min" type="text">
    <div class="div-main">
            <h2 class="titulo-viva-bem">Nossos Produtos!</h2>
            <p class="description-viva-bem">Explore nossa ampla gama de produtos e serviços cuidadosamente selecionados
                para promover seu bem-estar. De produtos naturais a programas de fitness personalizados, temos tudo o
                que você precisa para começar!</p>

            <p class="description-viva-bem">Aqui são exemplos de produtos que nós vendemos:</p>

            <div class="div-btn-produtos">
                <button class="btn-description-produtos">Suplementos Nutricionais
                    <span class="material-symbols-outlined">expand_more</span>
                </button>
            </div>

            <div class="div-btn-produtos">
                <button class="btn-description-produtos">Produtos Orgânicos e Naturais
                    <span class="material-symbols-outlined">expand_more</span>
                </button>
            </div>

            <div class="div-btn-produtos">
                <button class="btn-description-produtos">Produtos Personalizados
                    <span class="material-symbols-outlined">expand_more</span>
                </button>
            </div>
        </div>
    `
})