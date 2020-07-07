const escola = 'Cod3r'

console.log(escola.charAt(4))//vai passar a letra da 4 posição
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//vai passar o valor da tabela cod
console.log(escola.indexOf('3'))

console.log(escola.substring(1))// vai mostrar do 1 pra frente
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))// concat pode ser substituido por +
console.log(escola.replace(3,'e'))//substituir
console.log('Vitoria , Wesley , Salomão'.split(','))//vai gerar um array separado por ,