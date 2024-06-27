let soma_pares = 0
let soma_impares = 0
let total_pares = 0
let total_impares = 0

for(let i = 0; i <=999; i++) {
    console.log(i)
    
    if (i % 2 == 0) {
        soma_pares += i
        total_pares ++
    }
    else {
        soma_impares +=i
        total_impares ++
    }
}

let media_impares = soma_impares/total_impares
let media_pares = soma_pares/total_pares



    console.log('a soma dos numeros impares é: ' +  soma_impares);
    console.log('o total dos numeros impares é: ' + total_impares);

    console.log(' a soma dos pares é: ' + soma_pares);
    console.log(' o total dos numeros pares é: ' + total_pares);

    console.log(' a media dos numeros impares é: ' + media_impares);

    console.log(' a media dos numeros pares é: ' + media_pares);

