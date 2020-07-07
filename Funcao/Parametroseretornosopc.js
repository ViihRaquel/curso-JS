function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}n2.`)
        
    }else{
        return area
    }
}
//para passar os parametros
console.log(area(2,2))
console.log(area(2,8))
console.log(area())
console.log(area(2))
console.log(area(12,12))