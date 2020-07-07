function SoNoticiaBoa(nota){
    if(nota>=7){
        console.log('aprovado com '+nota)
    }
}
SoNoticiaBoa(8.1)
SoNoticiaBoa(6.0)

function SeForVerdade(valor){
    if(valor){
        console.log('É verdade...'+valor)
    }
}
SeForVerdade()
SeForVerdade('')
SeForVerdade(' ')
SeForVerdade('?')
SeForVerdade(null)
SeForVerdade(undefined)
SeForVerdade(0)
SeForVerdade(1)
SeForVerdade({})
SeForVerdade([])
SeForVerdade([1,2])