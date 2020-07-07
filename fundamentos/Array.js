const valores = [9, 8 ,7 ,6]
console.log(valores[0], valores[3])
console.log(valores[9])

valores[4]= 3
console.log(valores[4])
console.log(valores.length)

valores.push({id:3}, null, 'viih')//adicionar uma sequencia de valores
console.log(valores)
console.log(valores.pop())// ultimo valor

delete valores[0]
console.log(valores)

console.log(typeof valores)