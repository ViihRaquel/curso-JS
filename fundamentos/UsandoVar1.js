{
    {
        {
            {
                var sera = 'sera???'
                console.log(sera)
            }//criar uma variavel que não está dentro de uma função ficara visivel fora também
        }
    }
}
console.log(sera)

function teste (){
    var local = 123 //criar uma variavel que está dentro de uma função ela só será visivel aqui
    console.log(local)
} 
teste()
console.log(local)