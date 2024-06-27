// console.log("Digite um número e verifique se é par ou impar")
// process.stdin.once("data", function (data) {
//     let numero = Number(data.toString().trim())
//     let eHpar = numero%2 === 0;

//     if (eHpar) {
//         console.log ("par")
//     }else{
//         console.log ("impar")
//     }

//     process.exit()
// });


//let = declaração da variavel, numero = nome da variavel

let numero = 0  //INFORMAÇÃO QUE A VARIAVEL É ZERO

// é a função que mostra algo no terminal
console.log('Digite um numero')

// o que espera a entrada de dados do usuario
// console.log("Digite um número e verifique se é par ou impar")
/process.stdin.once("data", function (data) {

    //aqui estou passando valor digitado para minha variavel 
    numero = Number(data.toString().trim())

    let resultado = numero % 2;

    if (resultado == 0) {

        console.log("o numero é par")
    } else {
        console.log("o numero é impar")

    }
    process.exit()
})