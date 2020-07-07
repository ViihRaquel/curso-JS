function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado (não pode acesar diretamente)
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){ // O THIS é para tornar algo visivel pra fora
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new Carro //instaciar(criar)
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(400, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())