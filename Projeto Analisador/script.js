var num = window.document.getElementById('numero')
var add = window.document.getElementById('adicionar')
var fim = window.document.getElementById('finalizar')
var res = window.document.getElementById('res')

function adicionar() {
if (num.value.length == 0) {
  window.alert('Por favor, insira um número')
} else if (Number(num.value) < 1 || Number(num.value) > 100) {
 window.alert('Por favor, insira um número de 1 a 100!')
} else {
  var n = Number(numero.value)
  
  var item = document.createElement('option')
  item.text = `Valor ${n} adicionado`
  res.appendChild(item)
 }
}

