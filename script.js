
// * Matérias
const portugues = document.querySelector("#portugues");
const matematica = document.querySelector("#matematica");
const geografia = document.querySelector("#geografia");
const lideranca = document.querySelector("#lideranca");
const filosofia = document.querySelector("#filosofia");
const fisica = document.querySelector("#fisica");
const oratoria = document.querySelector("#oratoria");
const educacao_financeira = document.querySelector("#educacao_financeira");
const projeto_de_vida = document.querySelector("#projeto_de_vida");
const historia = document.querySelector('#historia');
const geopolitica = document.querySelector('#geopolitica');
const url = "repositorio/materias_2B/";

let botaoUp = document.querySelector('#btnUp');





window.addEventListener('scroll', () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            botaoUp.style.display = 'block'
    } else {
        botaoUp.style.display = 'none'
    }
})




botaoUp.addEventListener('click', ()=> {
    window.scrollTo(0, screenTop)
})


// ! Função para encontrar o conteudo
function mostrarConteudo(id) {
    const estrutura = document.querySelector("#conteudo");
    const iframe = document.querySelector("iframe");
    const botaoVoltar = document.querySelector("#voltar");

    let materias = {
        portugues: `${url}lingua-portuguesa.html`,
        matematica: `${url}matematica.html`,
        geografia: `${url}geografia.html`,
        lideranca: `${url}lideranca.html`,
        fisica: `${url}fisica.html`,
        filosofia: `${url}filosofia.html`,
        oratoria: `${url}oratoria.html`,
        educacao_financeira: `${url}educacao_financeira.html`,
        projeto_de_vida: `${url}projeto_de_vida.html`,
        historia: `${url}historia.html`,
        geopolitica: `${url}geopolitica.html`
    };

    estrutura.style.display = "none";
    botaoVoltar.style.display = "block";
    iframe.style.display = "block";
    botaoUp.remove()
    // TODO: Fazer com que o botão de up apareça depois que é acionado o iframe.

    botaoVoltar.addEventListener("click", () => {
        estrutura.style.display = "grid";
        botaoVoltar.style.display = "none"; // ? Volta ao normal 
        iframe.style.display = "none";
    });

    

    return (iframe.src = materias[id]);
}

// ? Cores do título
function adicionarHover(elemento, cor) {
    let h1 = elemento.querySelector("h1");
    elemento.addEventListener("mouseenter", () => {
        h1.style.color = cor;
    });
    elemento.addEventListener("mouseleave", () => {
        h1.style.color = "";
    });
}

adicionarHover(portugues, "green");
adicionarHover(matematica, "red");
adicionarHover(geografia, "orange");
adicionarHover(lideranca, "yellow");
adicionarHover(fisica, "cyan");
adicionarHover(filosofia, "blue");
adicionarHover(oratoria, "purple");
adicionarHover(educacao_financeira, "pink");
adicionarHover(projeto_de_vida, "magenta");
adicionarHover(historia, "brown");
adicionarHover(geopolitica, "#1ABC9C")

