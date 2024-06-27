console.log("Voce gosta de café?");
process.stdin.once("data", function (data) {

    let café = data.toString().trim().toLowerCase()

    if (café == "sim") {
        console.log("Parabéns vc tem um bom gosto");
    } else {
        console.log("Voce é unanimidade")
    }
    process.exit()

    });
