/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('digite seu nome: ', (nome) => {
    console.log(`Olá, ${nome}!`);
    rl.close()
})


let resultado;

rl.question('Digite um número: ', (num1) =>{
    rl.question('Digite o segundo número: ', (num2) =>{
        rl.question('Digite o terceiro número: ', (num3) =>{
            console.log(typeof num1);
            num1 = parseFloat (num1);
            num2 = parseFloat (num2);
            num3 = parseFloat (num3);
            resultado = num1 + num2 + num3;
            console.log('Valor da operação:', resultado);
            rl.close();
        });
    });       
})
*/
/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/
let num1;
let num2;
let num3;
let contador = 0

console.log('Digite um número:');
process.stdin.on('data', (data) =>{
let resposta = data.toString().trim();
contador++;
if (contador === 1) {
    num1 = parseFloat (resposta);
    console.log('Digite um número:');
}else if (contador === 2) {
    num2 = parseFloat (resposta);
    console.log('Digite um número;');
}else if (contador === 3){
    num3 = parseFloat(resposta);
    const resultado = num1 + num2 + num3;
    console.log("Valor da operação", resultado)
    process.exit();
}
});