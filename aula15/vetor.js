let valores = [1, 6, 3, 8, 2, 9]
/* for tradicional
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} */ 
// for in = simplificado
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}