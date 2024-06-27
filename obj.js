let pessoa = {
    nome : "Willian",
    idade : 25,
    cnh : "Possui"
};



process.stdin.once("data", function (data) {
    if (pessoa.nome) {
        pessoa.nome = data.toString().trim();
process.stdout.write("Quantos anos vocẽ tem?\n")
  } else if (!usuario.idade) {
    usuario.idade = data.toString().trim();
process.stdout.write("Olá" + usuario.nome + "vocẽ tem " + usuario.idade + "anos.\n");

process.stdout.write("Vocẽ possui CNH? (Sim ou Não \n");
  } else {
    usuario.temCnh = data.toString().trim().toLowerCase();
    if(usuario.temCnh == "sim") {
process.stdout.write("Parabéns," + usuario.nome + "!Você pode dirigir!\n");        
    } else {
process.stdout.write("Infelizmente," + usuario.nome + ", você não pode dirigir.\n");
console.log(usuario)
process.exit()
    }
  }
});
