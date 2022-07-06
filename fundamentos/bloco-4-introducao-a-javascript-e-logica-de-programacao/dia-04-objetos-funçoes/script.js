/* 
let player = {
name : 'Marta',
lastName : 'Silva',
age : 34,
medals : { golden: 2, silver: 3 },
theBestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
} 
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem' + player.age + ' ' + ' anos' + '  e possuí ' + player.medals.golden + ' medalhas de ouro');
console.log(player.name + ' foi eleita a melhor jogadora do mundo ' + player.theBestInTheWorld.length + '  vezes')  */

/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let nomes in names){
    console.log('Olá , ' + names[nomes])
  }

 */


/*   let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car){
    console.log(key + ' ' +car[key])
  } */


  //exercicio 1
 // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:


 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

 /*  console.log('Olá, ' + info.personagem) */

  //🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente']= 'Sim'
/* console.log(info.recorrente)
 */
/* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */

/* for(let chaves in info){
    console.log(info[chaves])
} */

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

/* for(let chaves in info){
    console.log(chaves)
} */


//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178' ,
    nota: ' último MacPatinhas',
  };

function todasInfos (magaridaInfo , tioPatinhasInfo){
    for(let index in todasInfos){
     console.log(magaridaInfo[index] , ' e ' , tioPatinhasInfo[index])
    }
console.log(todasInfos(info,info2))
}









