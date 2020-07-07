function TratarErroeLancar(erro){
    //throw new erro('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.nome,
        msg: erro.mensagem,
        date: new Date
    }
}
function ImprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        TratarErroeLancar(e)
    }finally{
        console.log('final')
    }
}

const obj= {nome:'Roberto'}
ImprimirNomeGritando(obj)