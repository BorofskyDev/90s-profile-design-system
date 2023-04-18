const btn = document.querySelector('.rotating-button')

btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left
    btn.style.setProperty('--degree', x + 'deg')
})