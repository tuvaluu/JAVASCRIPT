function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('img')
    var data = new Date()
    //var hora = data.getHours()
   var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } 
    else if (hora >= 12 && hora < 18) {
       img.src = 'manha.png'
        document.body.style.background = '#E06B01'
    } 
    else {
        img.src = "noite.png"
        document.body.style.background = '#001C3F'
        document.body.style.color = 'gray'
    }
}