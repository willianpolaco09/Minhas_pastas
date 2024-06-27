let algoritmo = ""
// Pedindo ao usuário que insira os números separados por vírgula
console.log("Digite 10 números entre 0 e 100 separados por vírgula :");

// Separando os números em um array
process.stdin.once ("data", function (data){
algoritmo = numerosString.split(",").map(Number);

// Inicializando contadores para cada intervalo
var intervalo1 = 0;  [0-25]
var intervalo2 = 0;  [26-50]
var intervalo3 = 0;  [51-75]
var intervalo4 = 0;  [76-100]

// Iterando sobre os números e contando quantos estão em cada intervalo
numerosArray.forEach(function(numero) {
    if (numero >= 0 && numero <= 25) {
        intervalo1++;
    } else if (numero >= 26 && numero <= 50) {
        intervalo2++;
    } else if (numero >= 51 && numero <= 75) {
        intervalo3++;
    } else if (numero >= 76 && numero <= 100) {
        intervalo4++;
    }
}});