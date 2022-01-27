const button = document.querySelectorAll('.ripple')

button.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        
        const xInside = x - buttonLeft 
        const yInside = y - buttonTop 

        const circle = document.createElement ('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.removeChild(), 500)
    })
})