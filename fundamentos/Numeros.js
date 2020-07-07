//dois tipos de declarar um numero
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//para saber se é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.888
const avaliacao2 = 6.176

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))//toFixed quantidade de casas para mostrar
console.log(media.toString())//trasforma no valor original em binario
console.log(typeof media)