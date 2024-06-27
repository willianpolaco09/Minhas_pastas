console.log("Digite uma frase e conte quantas letras tem?")
process.stdin.on("data", function (data) {
    let frase = data.toString().trim();
    let resultado = frase.length;
    let eHpar = resultado%2 === 0;

    console.log('o resultado final é:' + resultado)
    
    if (eHpar) {
        console.log ("par")
    }else{
        console.log ("impar")
    }

    process.exit()
});