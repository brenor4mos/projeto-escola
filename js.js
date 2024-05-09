
// * Matérias
const portugues = document.querySelector('#portugues');
const matematica = document.querySelector('#matematica');
const geografia = document.querySelector('#geografia');
const lideranca = document.querySelector('#lideranca');
const filosofia = document.querySelector('#filosofia');
const fisica = document.querySelector('#fisica');
const oratoria = document.querySelector('#oratoria');
const educacao_financeira = document.querySelector('#educacao_financeira');
const projeto_de_vida = document.querySelector('#projeto_de_vida');

const url = 'repositorio/materias_2B/';





function mostrarConteudo(id) {
    let estrutura = document.querySelector('#conteudo');
    let iframe = document.querySelector('iframe');
    let botaoVoltar = document.querySelector('#voltar');
    
    
    estrutura.style.display = 'none';
    botaoVoltar.style.display = 'block';
    iframe.style.display = 'block';
    
    botaoVoltar.addEventListener('click', () => {
        iframe.style.display = 'none'
        estrutura.style.display = 'block'
        botaoVoltar.style.display = 'none'
    })



    const materia = {
        portugues: `${url}lingua-portuguesa.html`,
        matematica: `${url}matematica.html`
    }


    console.log(materia.portugues)

    // const result = iframe.setAttribute('src', `${materia[id]}`)
    

    return result
}




// if (id == portugues) {
    //     iframe.setAttribute('src', `${materia.portugues}`)
    // } else if (id == matematica){
    //     iframe.setAttribute('src', `${materia.matematica}`)
    // } else if (id == geografia) {
    //     iframe.setAttribute('src', `${url}geografia.html`)
    // } else if (id == lideranca) {
    //     iframe.setAttribute('src', `${url}lideranca.html`)
    // } else if (id ==fisica) {
    //     iframe.setAttribute('src', `${url}fisica.html`)
    // } else if (id == filosofia) {
    //     iframe.setAttribute('src', `${url}filosofia.html`)
    // } else if (id == oratoria) {
    //     iframe.setAttribute('src', `${url}oratoria.html`)
    // } else if (id == educacao_financeira) {
    //     iframe.setAttribute('src', `${url}educacao_financeira.html`)
    // } else if (id == projeto_de_vida) {
    //     iframe.setAttribute('src', `${url}projeto_de_vida.html`)
    // }















portugues.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#portugues > h1')
    h1.style.color = 'green'
})
portugues.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#portugues > h1')
    h1.style.color = ''
})

matematica.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#matematica > h1')
    h1.style.color = 'red'
})
matematica.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#matematica > h1')
    h1.style.color = ''
})

geografia.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#geografia > h1')
    h1.style.color = 'orange'
})
geografia.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#geografia > h1')
    h1.style.color = ''
})

lideranca.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#lideranca > h1')
    h1.style.color = 'yellow'
    // h1.style.textShadow = '0px 0px 3px black'
})
lideranca.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#lideranca > h1')
    h1.style.color = ''
    h1.style.textShadow = ''
})

fisica.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#fisica > h1')
    h1.style.color = 'lightblue'
})
fisica.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#fisica > h1')
    h1.style.color = ''
})

filosofia.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#filosofia > h1')
    h1.style.color = 'blue'
})
filosofia.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#filosofia > h1')
    h1.style.color = ''
})

oratoria.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#oratoria > h1')
    h1.style.color = 'purple'
})
oratoria.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#oratoria > h1')
    h1.style.color = ''
})

educacao_financeira.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#educacao_financeira > h1')
    h1.style.color = 'pink'
})
educacao_financeira.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#educacao_financeira > h1')
    h1.style.color = ''
})

projeto_de_vida.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#projeto_de_vida > h1')
    h1.style.color = 'brown'
})
projeto_de_vida.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#projeto_de_vida > h1')
    h1.style.color = ''
})




