let hobbie = []

console.log("digite um hobbie ou peça para sair")

process.stdin.on('data',function (data){
    let hob = data.toString().toLowerCase().trim()

    if (hob === 'sair'){
        console.log('aqui estão seus hobbies!')

        hobbie.forEach(function(hob, index) {
           console.log((index +1) + '. '+ hob)
        });
        process.exit()
    } else {
        hobbie.push(hob)
        console.log('hob adcionado com sucesso. insira outro hob ou digite sair!');
    }
})
