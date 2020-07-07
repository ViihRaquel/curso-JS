let compararConThis = function (param){
    console.log(this === param)
}
compararConThis(global)

const obj = {}
compararConThis = compararConThis.bind(obj)
compararConThis(global)
compararConThis(obj)

let compararConThisArrow = param => console.log(this === param)
compararConThisArrow(global)
compararConThisArrow(module.exports)