let possuicnh = "" 
let motorista =  ""

process.stdout.write("Vocẽ possui cnh? ");

process.stdin.once("data", function (data) {
possuicnh = data.toString().trim().toLowerCase()

if (possuicnh === "sim") {
    console.log("motorista, vocẽ sabe dirigir");
} else {
console.log("motorista vocẽ não pode dirigir");
}

process.exit()
});