
let nome = "";
let idade = "";

console.log("Qual é o seu nome?");

process.stdin.once("data", function(data ){
    nome = data.toString();

    console.log("quantos anos vc tem?")


})

