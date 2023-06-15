function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName ('radsex')
       var idade = ano - Number(fano.value)
       var genero =''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'mascc.png')
        } else if (idade < 21) {
            img.setAttribute('src','mascj.png')
        } else if (idade < 50) {
            img.setAttribute('src','masca.png')
        } else {
            img.setAttribute('src', 'masci.png')
        }
       } else if (fsex[1].checked) {
        genero = 'Feminino'
        if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'femc.png')
        } else if (idade < 21) {
            img.setAttribute('src','femj.png')
        } else if (idade < 50) {
            img.setAttribute('src','fema.png')
        } else {
            img.setAttribute('src', 'femi.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

} 