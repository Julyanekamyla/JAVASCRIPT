var num = window.document.getElementById('numero')
var add = window.document.getElementById('adicionar')
var fim = window.document.getElementById('finalizar')
var saida = window.document.getElementById('saida')
var valores = []

function adicionar() {
if (num.value.length == 0) {
  window.alert('Por favor, insira um número')
} else if (Number(num.value) < 1 || Number(num.value) > 100) {
 window.alert('Por favor, insira um número de 1 a 100!')
} else {
  var n = Number(numero.value)
  valores.push(Number(n.value))
  var item = document.createElement('option')
  item.text = `Valor ${n} adicionado`
  res.appendChild(item)
  
  }
 
 num.value = '' /*Para limpar o campo NUM depois da digitação*/
 num.focus() /*Para manter o cursor de digitação dentro do campo NUM*/
 
}

function finalizar() {
var total = valores.length

saida.innerHTML =  ''
saida.innerHTML += `<p>Ao todo, temos um total de ${total} elementos</p>`


}
