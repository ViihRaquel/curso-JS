let dobro = function (a){
    return 2 + a

}

dobro = (a) =>{
    return 2 + a

}

dobro = a => 2 + a //Retorno implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
ola = () =>'Ola'

console.log(ola())