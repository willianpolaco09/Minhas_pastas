let tabuada = ""

process.stdout.write("Digite alguma tabuada: ");

process.stdin.once("data", function (data) {
    tabuada = parseInt(data);

    if (InNaN(tabuada)) {
        console.log('isso não é um numero válido.');
    }

    for (let i = 0; i <= 10; i ++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    }
    process.exit()
})