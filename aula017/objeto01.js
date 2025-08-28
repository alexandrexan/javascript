let amigo = {nome:"Xan",
sexo:"M", 
peso:95.0, 
engordar(p=0){this.peso += p}
}


amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)