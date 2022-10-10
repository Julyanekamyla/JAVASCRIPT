function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora > 0 && hora < 12) {
  img.src='amanhecer.png'
  document.body.style.background = '#e0c73d'
  msg2.innerHTML = `Bom Dia`
}else if(hora >= 12 && hora <= 18){
  img.src='entardecer.png'
  document.body.style.background = '#e0a73d'
  msg2.innerHTML = `Boa Tarde`
}else {
  img.src='anoitecer.png'
  document.body.style.background = '#090908'
  msg2.innerHTML = `Boa Noite`
}

}