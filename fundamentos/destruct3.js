function rand({min = 0 , max = 1000}){
    const valor = Math.random() * (max - min) + max //vai gerar um valor entre os dois
    return Math.floor(valor)
}

const obt = {min:50 ,max: 100}
console.log(rand(obt))
console.log(rand ({min:84}))
console.log(rand({}))