
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

let historia = document.querySelector('#historia')
historia.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#historia > h1')
    h1.style.color = 'yellow'
    // h1.style.textShadow = '0px 0px 3px black'
})
historia.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#historia > h1')
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
        iframe.setAttribute('src', '')
    } else if (id == geografia) {
        iframe.setAttribute('src', '')
    } else if (id == historia) {
        iframe.setAttribute('src', '')
    } else if (id ==fisica) {
        iframe.setAttribute('src', '')
    }
}