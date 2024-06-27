const aluno = [
    {nome: 'Igor' , idade: 16, contato: '(99 98989898)'},
    {nome: 'Felipe' , idade: 18, contato: '(45 12121212)'},
    {nome: 'Anna' , idade: 30, contato: '(66 34343434)'},
    {nome: 'Pedro' , idade: 42, contato: '(11 56565656)'},
]

aluno.forEach(function(item, index){
  if (item.idade >= 18 ){
    console.log(`${item.nome} tem ${item.idade} ele é de maior `)
  } else if (item.idade < 18 ){
    console.log(`${item.nome} tem ${item.idade} ele é de menor `)
  } console.log(item.contato)

})