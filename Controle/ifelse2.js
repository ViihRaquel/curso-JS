Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const resultado = function (nota){
    if (nota.entre(9,10)){
        console.log('Quadro de honrar')
    } else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if (nota.entre(4, 6.99)){
        console.log('RECUPERAÇÃO')
    }else if(nota.entre(0, 3.99)){
        console.log('REPROVADO')
    }else{
        console.log('NOTA INVALIDA')
    }
   console.log('FIM') 
}

resultado(10)
resultado(7)
resultado(4.87)
resultado(0)
resultado(18)
