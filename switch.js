let produto = 0

process.stdout.write("Digite um produto" + " ");
process.stdin.once("data", function (data){
produto = Number(data.toString().trim());

switch (produto) {
    case 1:
        console.log("Alimento não perecivel")
        break;

    case 2:
            console.log("Alimento perecivel")
        break;

    case 3:
            console.log("Vestuário")
        break;

    case 4:
            console.log("Limpeza")
        break;

    default:
        console.log ("Isso não existe")
        break;
}})