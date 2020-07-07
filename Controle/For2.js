const notas = [6,7,8.9, 10]
for( i in notas ){
    console.log(i, notas[i])
}
const pessoa = {
    nome:'Viih' ,
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

 for (atributo in pessoa) {
     console.log(`${atributo} = ${pessoa[atributo]}`)
 }