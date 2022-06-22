// exercicio 1

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log (numbers[index]);
    
} */

//exercicio 2

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
for (let index = 0; index < numbers.length; index++ ) {
    sum += numbers[index]
}
console.log(sum) */

//exercicio 3

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mediaArit = 0;
for (let index = 0; index < numbers.length; index++ ) {
    sum += numbers[index]
    mediaArit = sum / (numbers.length )
}
console.log(mediaArit); */

//exercicio 4

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let mediaArit = 0;
for (let index = 0; index < numbers.length; index++ ) {
    sum += numbers[index]
    mediaArit = sum / (numbers.length )
}

if (mediaArit > 20){
    console.log('valor maior que 20')
}else if( mediaArit <= 20){
    console.log('Valor menos igual a 20')
}
 */
// exercicio 5

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index++) {
   if(maiorNumero < numbers[index]){
    maiorNumero = numbers[index]
   }else if (maiorNumero > numbers ){
    maiorNumero = maiorNumero
   }
}
console.log(maiorNumero) */

//exercicio 6

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantosImpares = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    quantosImpares += 1;
  }
}
if (quantosImpares === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(quantosImpares);
  } */

//exercicios 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    
    if(numbers[index] < menorNumero){
    menorNumero = numbers[index]
   } 
}
console.log(menorNumero)
