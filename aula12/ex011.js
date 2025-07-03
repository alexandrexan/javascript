var vota = 18
console.log(`Você tem ${vota} anos.`)
if (vota < 16) {
    console.log('Não vota')
} else if (vota < 18 || vota > 70) {
    console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }