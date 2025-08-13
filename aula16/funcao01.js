function parimpar(n) {
    if (n % 2 == 0){
        return 'Par';
    } else {
        return 'Impar';
    }
}
let res = parimpar(10);
console.log(`O número ${10} é ${res}`);