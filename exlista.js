//numeros da lista pre definida
var num1 = [1,2,3,4,5,6,7,8,9,10]
var num2 = ''

//Pedir para o usuário digitar algum numero
console.log('Digite um número de 0 a 10!')

// ler o que o Usuário digitou
process.stdin.once("data", function (data) {
    num2 = Number(data.toString().trim().toLowerCase())

//Exibir uma mensagem personalizada com os dados do usuário  
        if (num1.includes(num2)){
            console.log('O numero está incluso!')

        } else {
            console.log('o numero não está incluso')
//finaliza o código
        } process.exit()
});
