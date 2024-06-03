

const body = document.querySelector('body')

const botao = document.createElement('button')
botao.setAttribute('class', 'botao')
body.insertAdjacentElement('beforeend', botao)



botao.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})