const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apartmentSchema = new Schema({
    Edificio:String,
    Piso:String,
    'Numero interno':Number,
    Tipo:String
}, {collection:'departamentos'})


//crear modelo
const Apartamento = mongoose.model('Apartamento', apartmentSchema)

module.exports = Apartamento

//const apartmentSchema = new Schema({
//    Edificio:String,
//    Piso:String,
//    'Numero interno':Number,
//    Tipo:String
//}, {collection:'test1'})



//crear modelo
/*const Apartamento = mongoose.model('Apartamento', apartmentSchema)

module.exports = Apartamento

//const apartmentSchema = new Schema({
//    Edificio:String,
//    Piso:String,
//    'Numero interno':Number,
//    Tipo:String
//}, {collection:'test1'})*/