//math.floor arredondando para inteiro
//math.radom algum numero aleatorio
// o * e o numero delimita até onde meu numero vai

let numerorandom = Math.floor(Math.random() * 31)
let tentativas = 5
let entrada;
console.log(numerorandom);
console.log('Digite um número de 0 a 30')

process.stdin.on('data', function (data){
    entrada = Number (data.toString().trim())

    if (numerorandom == entrada ) {
        console.log("Voce acertou")
    } else if (entrada != numerorandom ){
        console.log("Tente outra vez")
        tentativas--
    }
    if (0>= tentativas){
        console.log('voce perdeu')
        process.exit()
    }
})

