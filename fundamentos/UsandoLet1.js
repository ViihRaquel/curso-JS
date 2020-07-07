let numero = 1
{
    let numero = 2 // por esta em escropo diferente não vai ter problema com o nome
    console.log('dentro ',numero)
}
console.log('fora ',numero)