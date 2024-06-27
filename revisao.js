let numerorandom = Math.floor(Math.random() * 100)
let entrada;
console.log(numerorandom);
console.log('Digite um número de 0 a 100')

process.stdin.on('data', function (data){
    entrada = Number (data.toString().trim())
    })