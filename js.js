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

const url = "repositorio/materias_2B/";

// ! Função para encontrar o conteudo
function mostrarConteudo(id) {
    let estrutura = document.querySelector("#conteudo");
    let iframe = document.querySelector("iframe");
    let botaoVoltar = document.querySelector("#voltar");

    estrutura.style.display = "none";
    botaoVoltar.style.display = "block";
    iframe.style.display = "block";

    botaoVoltar.addEventListener("click", () => {
        iframe.style.display = "none";
        estrutura.style.display = "block";
        botaoVoltar.style.display = "none";
    });

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
    };

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
adicionarHover(fisica, "lightblue");
adicionarHover(filosofia, "blue");
adicionarHover(oratoria, "purple");
adicionarHover(educacao_financeira, "pink");
adicionarHover(projeto_de_vida, "brown");
