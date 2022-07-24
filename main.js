window.addEventListener('load', () => {
    const h1s = document.querySelectorAll('h1')
    for(let i = 0; i < h1s.length; i++) h1s[i].textContent = `${i+1}:`
    document.querySelectorAll('li').forEach(li => li.setAttribute('color', `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())})`))
    Scroll()
})
window.addEventListener('scroll', Scroll)

function Scroll() {
    document.querySelectorAll('figure *').forEach(e => {
        if(e.getBoundingClientRect().top < window.innerHeight - 150) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }
    })
    let lis = []
    document.querySelectorAll('li').forEach(li => {
        if(li.getBoundingClientRect().top < window.innerHeight - 600) {
            lis.push(li.getAttribute('color'))
        }
    })
    document.querySelector('body').style.backgroundColor = lis.slice(-1)[0]
}