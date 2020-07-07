const soma = function (x , y){
    return x + y
}

const imprimirresultado = function (a, b, opracao = soma){
    console.log(opracao(a,b))
}

imprimirresultado(3,4)
imprimirresultado(3,4, function(x,y){
    return x - y
})
imprimirresultado(3,4,(x,y) => x *y)

const pessoa = {
    falar(){
        console.log('opá')
    }
}
pessoa.falar()