// 5! = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
}
console.log(`O fatorial de ${5} é ${fatorial(5)}`);