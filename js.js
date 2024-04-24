

document.querySelector('#burger').addEventListener('click', () => {
    let menu = document.querySelector('#menu');

    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})
