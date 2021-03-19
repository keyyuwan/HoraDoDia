function carregar() {
    var time = document.querySelector('div#time')
    var img = document.querySelector('img#image')
    var msg = document.querySelector('div#msg')
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    time.innerHTML = `Agora são exatamente ${hour}:${minute}`
    if(hour >= 0 && hour < 12) {
        // Bom dia
        img.src = './images/manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = 'Bom Dia!'
    } else if(hour >= 12 && hour < 18) {
        // Boa tarde
        img.src = './images/tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = 'Boa Tarde!'
    } else {
        // Boa noite
        img.src = './images/noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = 'Boa Noite!'
    }
}

