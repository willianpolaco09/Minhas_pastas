let notas = []

console.log("Digite nota 1")
process.stdin.once("data", function (data) {
    let nota1 = Number(data.toString().trim())
    notas.push(nota1)
   
    console.log("Digite nota 2")
process.stdin.once("data", function (data) {
    let nota2 = Number(data.toString().trim())
    notas.push(nota2)

    console.log("Digite nota 3")
    process.stdin.once("data", function (data) {
        let nota3 = Number(data.toString().trim())
        notas.push(nota3)
    console.log(notas)
    
    let result = ((notas[0] + notas[1] + notas[2]) / 3);

    console.log("A media das 3 notas eh" + result)

    if (notas[0] > notas[1] && notas[0] > notas[2]) {
        console.log("A maior nota eh a nota 1 " + notas[0])
    } else if (notas[1] > notas[0] && notas [1] > notas[2]) {
        console.log("A maior nota eh a nota 2 " + notas[1])
    }  else {
        console.log("A maior nota eh a nota 3 " +notas[2])
    }

       process.exit();
        
    });
    
});
});