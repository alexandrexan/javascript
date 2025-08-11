let num = [10, 15, 20, 25];
num.push(30);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} elementos`);
console.log(`O primeiro valor é ${num[0]}`);
for (let posição = 0; posição < num.length; posição++) {
    console.log(`O valor na posição ${posição} é ${num[posição]}`);
}
/* valores.indexOf(4);
console.log(valores.indexOf(4)); retorna -1 se não encontrar o valor
*/