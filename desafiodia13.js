//Pedir para o usuário digitar seu nome
process.stdout.write("digite sua idade: ");

//Ler o que o usuário digitou
process.stdin.once("data", function (data) {
    const YEAR = 2023;
    //Ler a idade
    let idade = parseInt(data,toString(). trim());
    let ano = YEAR - idade;

    //Exibir uma mensagem personalizada com as informações do usuário
    process.stdout.write("Olá vocẽ nasceu em: " + ano);
    
    //finaliza o código
    process.exit();
});0






