console.log(Math.ceil(7.1))//aredonda para cima

const object1={}

object1.nome = 'vivi'
//object1['nome'] = 'lala'

console.log(object1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()