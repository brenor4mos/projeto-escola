let portugues = document.querySelector('#portugues')
portugues.addEventListener('mouseenter', () => {
    let h1 = document.querySelector('#portugues > h1')
    h1.classList.add('cor')
})
portugues.addEventListener('mouseleave', () => {
    let h1 = document.querySelector('#portugues > h1')
    h1.classList.remove('cor')
})

let matematica = document.querySelector('#matematica')
matematica.addEventListener('mouseenter', () => {
    if(matematica.style.color == '') {
        matematica.style.color = 'red'
    }
})
matematica.addEventListener('mouseleave', () => {
    if (matematica.style.color == 'red') {
        matematica.style.color = ''
    }
})

let geografia = document.querySelector('#geografia')
geografia.addEventListener('mouseenter', () => {
    if(geografia.style.color == '') {
        geografia.style.color = 'orange'
    }
})
geografia.addEventListener('mouseleave', () => {
    if (geografia.style.color == 'orange') {
        geografia.style.color = ''
    }
})
