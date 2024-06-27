let notas = []
let aluno = ""

console.log("Digite seu nome");
process.stdin.once("data", function (data){
    aluno = (data.toString().trim())

console.log("Digite a nota 1")
process.stdin.once("data", function (data){
    let nota1 = (35) (data.toString().trim())
    notas.push(nota1)

console.log("Digite a nota 2")
process.stdin.once("data", function (data){
    let nota2 = Number(data.toString().trim())
    notas.push(nota2)

console.log("Digite a nota 3")
process.stdin.once("data", function (data){
    let nota3 = Number(data.toString().trim())
    notas.push(nota3)
    
console.log("Digite a nota 4")
process.stdin.once("data", function (data){
    let nota4 = Number(data.toString().trim())
    notas.push(nota4)

    let result = ((notas[0] + notas[1] + notas[2] + notas[3]) / 4 )

    console.log("A média das 4 notas é " + result + " " + aluno)

    if (result >= 7) {
        console.log("Voce está aprovado!")
    } else {
        console.log("voce está reprovado e vai apanhar quando chegar em casa!")
    }

process.exit()
})
})
})
})
})