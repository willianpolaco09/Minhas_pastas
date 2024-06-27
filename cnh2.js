let idade = ""
let maioridade = ""

process.stdout.write("qual sua idade? ");
process.stdin.once("data", function (data) {

idade= data
if (idade >= 18) {
    console.log("voce pode dirigir");
} else {
    console.log("nao pode dirigir")
}
process.exit()
});