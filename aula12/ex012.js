var live = new Date()
var hora = live.getHours()
var minuto = live.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
