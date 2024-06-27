1-
//Descreva a funcionalidade de uma Variavel criando um exemplo prático.
Crie uma variável que armazene o nomede uma pessoa e, em seguida, exiba esse nome no console


//Uma variavel serve para armazenar dados no computador
let meuNome = "Will"
console.log (nome)

//2-
//Crie um código que declare uma variavel boleana para verificar
//se um número é par e mostre o resultado no console


let numero = 10
let result = true

if (numero % 2 != 0){
    console.log("Esse número é impar")
    result = true
}else {
    result = false
    console.log("Esse número é par")
}

let x = 11
let y = x%2 === 0

if (y) {
    console.log("Número é par")
}else {
    console.log("Número é impar")
}

3
let idade = 18
let mensagem
if (idade >= 16) {
    mensagem = "Voce pode votar"
}else {
    mensagem = "Voce não pode votar"
}
console.log(mensagem)


4
let idade = 21
let mensagem
if (idade >= 18) {
    mensagem = "Voce pode dirigir"
}else{
    mensagem = "Voce não pode dirigir"
}


let numeros = [1,2,3,4,5]
let soma = 0

for(let i = 0; i <numeros.length; i++) {
    if(numeros[i] % 2 != 0) {
        soma += numeros[i]
        soma = numero[i] 
    }
}
console.log(soma)


//Lista de Notas dos Alunos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

for (let i = 0; i <notas.length; i++) {
    console.log(notas[i])
}


let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media = 0
let soma = 0

for (let i = 0; i <notas.length; i++) {
    soma = soma + notas[i];
}

media = soma / notas.length;

console.log(media)



let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]


switch (key) {
    case value:
        
        break;

    default:
        break;
}