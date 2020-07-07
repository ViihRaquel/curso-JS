const saudacao= 'opa'

function exec (){
    const saudacao = 'tudo bem...'
    console.log(saudacao)
    return saudacao
}

const client = {
    nome: 'vitoria',
    idade: 18,
    peso: 49,
    endereço: {
        rua: 'São raimundo',
        numero: 5
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)