let valor // não incializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco= 19
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // valor nulo
console.log(produto)