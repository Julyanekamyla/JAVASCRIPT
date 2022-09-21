var hora = 55
if(hora < 12) {
  console.log(`São ${hora} horas, então te desejo um bom dia!`)
} else if(hora < 18) {
  console.log(`São ${hora} horas, então te desejo uma boa tarde!`)
}
else if(hora > 18 && hora < 24){
  console.log(`Sâo ${hora} horas, então te desejo uma boa noite!`)
} else {
  console.log(`Essa não é uma hora válida`)}