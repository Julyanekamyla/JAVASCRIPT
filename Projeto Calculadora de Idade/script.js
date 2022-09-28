function clicar() {
var data = new Date()
var ano = data.getFullYear()
var nascimento = window.document.querySelector('input#nascimento')
var res = window.document.querySelector('div#res')
if (nascimento == 0 || Number(nascimento.value) > ano) {
  window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
  var sexo = document.getElementsByName('sexo')
  var idade = ano - Number(nascimento.value)
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if (sexo[0].checked){
    genero = 'Homem'
    if (idade >= 0 && idade <= 14) {
    img.setAttribute('src', 'menino.png')
    }else if (idade < 24) {
    img.setAttribute('src', 'jovemhomem.png')
    }else if (idade < 64) {
      img.setAttribute('src', 'adulto.png')
    }else {
      img.setAttribute('src', 'idoso.png')
    }
 }else if (sexo[1].checked){
    genero = 'Mulher'
    if (idade >= 0 && idade <= 14){
      img.setAttribute('src', 'menina.png')
      }else if (idade < 24) {
      img.setAttribute('src', 'jovemmulher.png')
      }else if (idade < 64){
        img.setAttribute('src', 'adulta.png')
      }else {
        img.setAttribute('src', 'idosa.png')
      }
  }
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  res.appendChild(img)
}
}