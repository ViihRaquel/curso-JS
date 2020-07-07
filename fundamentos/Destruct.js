const pessoa = {
    nome : 'vivi',
    idade : 18,
    peso : 50,
    endereco: {
        rua: 'lala',
        numero: 2
    }

}

const {nome , idade}= pessoa
console.log(nome, idade)

const { nome: n , idade: i}= pessoa
console.log(n,i)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)
