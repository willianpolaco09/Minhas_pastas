let resultado
//potencia 2 elevado a 2 = 4
/*
resultado = Math.pow(2 , 2);

resultado = Math.PI;

resultado = Math.sqrt(25,2);
resultado = 5.50

resultado = Math.floor(resultado)

//random() / numero aleatorio entre 0 e 1
//Gerar um numero aleatorio entre dois valores quaisquer
resultado = Math.random().toFixed(4)
console.log(resultado)
*/
//selecionar um item aleatorio de um array
const nomes = ["luis", "anna", "will", "fernando", "maria"];
const indiceArray = Math.round(Math.random() * nomes.length)
//console.log(indiceArray);
const randomElement = nomes[indiceArray]
console.log(randomElement)


/*
//me mostra o maior valor
let r1 = 9;

let r2 = 2;

let r3 = 3;

let r4 = [38, 16, 71, 44, 17, 100]
// 3 pontinhos espalha o array
console.log(r4)
resultado = Math.max(...r4);
console.log(resultado)


//me mostra o menor valor
let r1 = 9;

let r2 = 2;

let r3 = 3;

let r4 = [38, 16, 71, 44, 17, 100]
// 3 pontinhos espalha o array
console.log(r4)
resultado = Math.min(...r4);
console.log(resultado)
*/
