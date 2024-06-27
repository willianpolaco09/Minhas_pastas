let nInteiro = 0

console.log("Digite um número inteiro")

process.stdin.once("data", function (data) {
    nInteiro = Number(data.toString().trim())


        console.log("Este é o numero antecessor! " + (nInteiro -1) + )
    
        console.log ("Este é o numero sucessor! " + (nInteiro +1))

        console.log ("Este é o numero digitado! " + nInteiro)
    

});