const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resultado_C;
let resultado_K;
let resultado_F;

rl.question("Digite 'f' para Fahrenheit, 'c' para Celsius e 'k' para kelvin:"), (entrada)=>{

if (entrada === 'f' || entrada === "c" || entrada === "k") {
        const conversor = entrada;
        rl.question("Agora digite uma temperatura:", (temperatura) =>{
let temp = Number(temperatura);
if (Number.isNaN(temp)) {
    console.log("insira uma temperatura válida.");
    rl.close();
}else {
    if (conversor === "f") {
        resultado_C = (temp - 32) / 1.8;
        resultado_K = ((temp - 32)* 5) / 9 + 273.15
    }
}
        })
    }
}



