const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()// conflito

const falardepessoa = pessoa.falar.bind() // o Bind passa o objeto que vc quer que seja resolvido o this
falardepessoa()