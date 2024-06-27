var hobbie = []
let console = ''

console.log('Digite quais sao seus hobbies ou digite sair');

process.stdin.once ("data", function (data) {
    let hobbie =(data.toString().trim().toLowerCase())
    hobbie.push(hobbie)

    if (hobbie !== null){
        console.log("Seus hobbies sao: " + hobbie);
    } else if (hobbie === "sair") {
        process.exit()     
    }
   
})