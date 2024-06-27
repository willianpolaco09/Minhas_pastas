let mesdoAno = ""

process.stdout.write("Digite um mes do ano" + " ");
process.stdin.once("data", function (data){
mesdoAno = (data.toString().trim());

switch (mesdoAno) {
    case "Março":
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono")
    break;   

    case "julho":
    case "agosto":
    case "setembro":
    
        console.log("Inverno")
    break;

    
    case "outubro":
    case "novembro":
    case "dezembro":
        console.log("Primavera")
    break;

    case "janeiro":
    case "fevereiro":
    
        console.log("Verão")
        break;
    default:
        console.log ("Isso não existe")
        break;
}

})