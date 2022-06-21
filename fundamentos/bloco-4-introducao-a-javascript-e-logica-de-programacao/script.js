let a = 8;
let b = 5;
console.log(soma = a + b);
console.log(subtracao = a - b);
console.log(multiplicacao = a * b);
console.log(divisao = a / b);
console.log(modulo = a % b);

// exercicio 2
if (a > b) {
    console.log(a)
}
else if (a < b) {
    console.log(b)
};

//exercicio 3

const primeiroNumero = 44;
const segundoNumero = 6;
const terceiroNumero = 21;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log(primeiroNumero)
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log(segundoNumero)
} else if (terceiroNumero > segundoNumero && terceiroNumero> primeiroNumero) {
    console.log(terceiroNumero)
};

//exercicio 4

const num1 = -55;
if(num1 > 0){
    console.log('positive')
} else if(num1<0) {
    console.log('negative')
}else if (num1 == 0){
    console.log('0')
};

//exercicio 5

const angulo1 = 20;
const angulo2 = 80;
const angulo3 = 55;

var somaAngulos = angulo1+angulo2+angulo3

if(somaAngulos === 180 ){
console.log(true)
}else if (somaAngulos < 180){
    console.log (false)
}else{
    console.log('error')
}