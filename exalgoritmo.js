let listaNumeros = []

console.log("Insira 15 numeros:")

//Quando o usuario insere dados, este evento é acionado
process.stdin.on('data', function(data){
    let numeros = Number(data.toString().trim());

    if(listaNumeros.lenght > 14){
        console.log("Aqui estão os numeros digitados imprimido por for:");
        for(let i = 0; listaNumeros.length > i; i++){
            console.log(listaNumeros[i]);
        }
//usando forEach
        console.log("Usando forEach:");
        listaNumeros.forEach(function(elemento)
        {
        console.log(elemento);
        });
        
        process.exit()
    } else {
        listaNumeros.push(numeros);
        console.log("Insira mais um numero:");

    }

});

let pares = [];
let impares = [];

for(letnumeros = 0; Numeros.lenght; i ++)

    
