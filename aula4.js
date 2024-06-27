//Exemplo com var
var x = 10;
console.log("var:",x); // 10

x = 20
console.log(x); // 20

//Exemplo com let
let y = 10;
console.log("let:",y); // 10

y = 20;
console.log("let:", y); // 20 

//console.log("ola mundo")

console.log("bem vindo")

// Definindo uma variavel para armazenar a entrada do usuario
let entradaUsuario = '';

//Escutando o evento 'data' para receber dados de entrada do usuario

process.stdin.on('data', function (data) {
//Convertendo os dados de entrada (buffet) para atring
entradaUsuario = data.toString();

//Exibindo a entrada do usuario no console
console.log('Voce digitou:' + entradaUsuario);
});


//Definindo uma variavel para armazenar a entrada do usuario
let meuNome = '';

//Escutando o evento 'data' para receber dados de entrada do usuario

let nome = "";
let idade = "";

console.log("Qual é o seu nome?");

process.stin.once("data", function(data ){
    nome = data.toString();

    console.log("quantos anos vc tem?")


})






