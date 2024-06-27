var endereco = {
    rua: "Av do CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: "Cuiabá",
    uf: "MT"
};
process.stdin.once("data",function(data){
endereco = data.toString().trim();

console.log(`O usuário mora em ${cidade}`);
})


