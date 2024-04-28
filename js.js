
let portugues = document.querySelector('#portugues')
portugues.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#portugues > h1')
    h1.style.color = 'green'
})
portugues.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#portugues > h1')
    h1.style.color = ''
})

let matematica = document.querySelector('#matematica')
matematica.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#matematica > h1')
    h1.style.color = 'red'
})
matematica.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#matematica > h1')
    h1.style.color = ''
})

let geografia = document.querySelector('#geografia')
geografia.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#geografia > h1')
    h1.style.color = 'orange'
})
geografia.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#geografia > h1')
    h1.style.color = ''
})

let lideranca = document.querySelector('#lideranca')
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

let fisica = document.querySelector('#fisica')
fisica.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#fisica > h1')
    h1.style.color = 'lightblue'
})
fisica.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#fisica > h1')
    h1.style.color = ''
})

let filosofia = document.querySelector('#filosofia')
filosofia.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#filosofia > h1')
    h1.style.color = 'blue'
})
filosofia.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#filosofia > h1')
    h1.style.color = ''
})

let oratoria = document.querySelector('#oratoria')
oratoria.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#oratoria > h1')
    h1.style.color = 'purple'
})
oratoria.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#oratoria > h1')
    h1.style.color = ''
})

let educacao_financeira = document.querySelector('#educacao_financeira')
educacao_financeira.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#educacao_financeira > h1')
    h1.style.color = 'pink'
})
educacao_financeira.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#educacao_financeira > h1')
    h1.style.color = ''
})

let projeto_de_vida = document.querySelector('#projeto_de_vida')
projeto_de_vida.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#projeto_de_vida > h1')
    h1.style.color = 'brown'
})
projeto_de_vida.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#projeto_de_vida > h1')
    h1.style.color = ''
})

function mostrarConteudo(id) {
    let estrutura = document.querySelector('#conteudo')
    let iframe = document.querySelector('iframe')
    let botaoVoltar = document.querySelector('#voltar')
    

    estrutura.style.display = 'none'
    botaoVoltar.style.display = 'block'
    iframe.style.display = 'block'
    
    botaoVoltar.addEventListener('click', () => {
        iframe.style.display = 'none'
        estrutura.style.display = 'block'
        botaoVoltar.style.display = 'none'
    })


    if (id == portugues) {
        iframe.setAttribute('src', 'repositorio/materias_2B/lingua-portuguesa.html')
    } else if (id == matematica){
        iframe.setAttribute('src', 'repositorio/materias_2B/matematica.html')
    } else if (id == geografia) {
        iframe.setAttribute('src', 'repositorio/materias_2B/geografia.html')
    } else if (id == lideranca) {
        iframe.setAttribute('src', 'repositorio/materias_2B/lideranca.html')
    } else if (id ==fisica) {
        iframe.setAttribute('src', 'repositorio/materias_2B/fisica.html')
    } else if (id == filosofia) {
        iframe.setAttribute('src', 'repositorio/materias_2B/filosofia.html')
    } else if (id == oratoria) {
        iframe.setAttribute('src', 'repositorio/materias_2B/oratoria.html')
    } else if (id == educacao_financeira) {
        iframe.setAttribute('src', 'repositorio/materias_2B/educacao_financeira.html')
    } else if (id == projeto_de_vida) {
        iframe.setAttribute('src', 'repositorio/materias_2B/projeto_de_vida.html')
    }
}